import { forwardRef, useCallback, useMemo, useRef, useState, useImperativeHandle } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import SkillNode from "./SkillNode";
import { Html, OrbitControls } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from 'three-stdlib';
import { Skill } from "@/types/data";

const initializeGlobe = (radius: number, detail: number) => {
  const geometry = new THREE.IcosahedronGeometry(radius, detail);
  const posAttr = geometry.attributes.position;
  const verts: THREE.Vector3[] = [];
  const seen = new Set<string>();

  for (let i = 0; i < posAttr.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(posAttr, i);
    const key = v.toArray().map(n => n.toFixed(4)).join(',');
    if (!seen.has(key)) {
      seen.add(key);
      verts.push(v.normalize().multiplyScalar(radius));
    }
  }

  const yThreshold = radius * 0.99;
  return { geometry, vertices: verts.filter(v => Math.abs(v.y) < yThreshold) };
};

// Ease-in-out function
function easeInOutQuad(t: number): number {
  // t < 0.5: t^2
  // t >= 0.5: -2(t-1)^2 + 1
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

const SkillGlobe = forwardRef(({
  config,
  skills,
  selectedSkill,
  onSelectSkill
}: {
  config: {
    globeRadius?: number;
    globeDetail?: number;
    globeColor?: string;
    focusTransitionSpeed?: number;
  };
  skills: Skill[] | null;
  selectedSkill: Skill | null;
  onSelectSkill: (skill: Skill | null) => void;
}, ref) => {
  if(!skills) return <></>;
  
  const { camera } = useThree();
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; position: THREE.Vector3 } | null>(null);
  const tempSkill = useRef<Skill | null>(null);
  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<OrbitControlsType>(null);
  const targetCameraPos = useRef<THREE.Vector3 | null>(null);
  const targetControlTarget = useRef<THREE.Vector3 | null>(null);
  const startTime = useRef<number | null>(null);
  const startCameraPos = useRef<THREE.Vector3 | null>(null);
  const startControlTarget = useRef<THREE.Vector3 | null>(null);
  const transistionType = useRef<'focus' | 'clear' | null>(null);
  const {
    globeRadius = 2.5,
    globeDetail = 1,
    globeColor = '#000',
    focusTransitionSpeed = 1000
  } = config;

  // Expose methods or refs to parent
  useImperativeHandle(ref, () => ({
    clearFocus,
  }));

  const skillLength = skills.length;
  const { geometry, vertices } = useMemo(() => initializeGlobe(globeRadius, globeDetail), []);
  const skillPositions = useMemo(() => vertices.sort(() => Math.random() - 0.5).slice(0, skillLength), []);

  useFrame(() => {
    if (
      !startCameraPos.current ||
      !startControlTarget.current ||
      !targetCameraPos.current ||
      !targetControlTarget.current ||
      !controlsRef.current ||
      !startTime.current
    ) return;
    const elapsedTime = performance.now() - startTime.current;
    const alpha = easeInOutQuad(Math.min(elapsedTime / focusTransitionSpeed, 1)); //apply ease-in-out for smooth transition

    // Interpolate camera position and target
    const currentCamPos = startCameraPos.current.clone().lerp(targetCameraPos.current, alpha);
    const currentTarget = startControlTarget.current.clone().lerp(targetControlTarget.current, alpha);

    camera.position.copy(currentCamPos);
    controlsRef.current.target.copy(currentTarget);

    if (alpha >= 1) {
      // Set final position
      if (transistionType.current === 'clear') {
        camera.position.copy(targetCameraPos.current);
        controlsRef.current.target.copy(targetControlTarget.current);
        controlsRef.current.update();
      }
      else if (transistionType.current === 'focus') {
        onSelectSkill(tempSkill.current);
        tempSkill.current = null;
      }
      // Clear targets to stop interpolation
      targetCameraPos.current = null;
      targetControlTarget.current = null;
      transistionType.current = null;
    }
  });

  // Event handlers
  const nodePointerEnter = useCallback((skill: { name: string; position: THREE.Vector3 }) => {
    if (selectedSkill) return;
    setHoveredSkill({
      name: skill.name,
      position: skill.position.clone().add(new THREE.Vector3(0, 0.35, 0))
    });
  }, [selectedSkill]);

  const nodePointerLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  const focusOn = useCallback(({ skill, position }: { skill: Skill; position: THREE.Vector3}) => {
    if (!controlsRef.current) return;
    tempSkill.current = skill;

    const direction = position.clone().normalize();
    targetCameraPos.current = direction.clone().multiplyScalar(4);
    targetControlTarget.current = direction.clone().multiplyScalar(2);

    startCameraPos.current = camera.position.clone();
    startControlTarget.current = controlsRef.current.target.clone();
    startTime.current = performance.now();
    transistionType.current = 'focus';
  }, []);

  const clearFocus = useCallback(() => {
    if (!controlsRef.current) return;
    onSelectSkill(null);

    targetCameraPos.current = startCameraPos.current;
    targetControlTarget.current = startControlTarget.current;

    startCameraPos.current = camera.position.clone();
    startControlTarget.current = controlsRef.current.target.clone();
    startTime.current = performance.now();
    transistionType.current = 'clear';
  }, []);

  return (
    <group ref={groupRef} onPointerMissed={clearFocus}>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={globeColor}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {skillPositions.map((pos, index) => (
        <SkillNode
          key={index}
          position={pos}
          skill={skills[index]}
          onClick={selectedSkill ? () => { } : focusOn}
          onPointerEnter={nodePointerEnter}
          onPointerLeave={nodePointerLeave}
        />
      ))}

      {hoveredSkill && (
        <Html position={hoveredSkill.position} distanceFactor={8} center occlude>
          <div key={hoveredSkill.name} className='tooltip_canvas'>
            {hoveredSkill.name}
          </div>
        </Html>
      )}

      <OrbitControls
        ref={controlsRef}
        enableDamping={false}
        enableZoom={false}
        enablePan={false}
        autoRotate={selectedSkill ? false : true}
        autoRotateSpeed={2}
      />
    </group>
  );
});

export default SkillGlobe;
