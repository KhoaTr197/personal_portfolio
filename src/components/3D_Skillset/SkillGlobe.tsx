import { useFrame, useThree } from "@react-three/fiber";
import { useCallback, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import * as Devicon from "devicons-react";
import SkillNode from "./SkillNode";
import { Html, OrbitControls } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from 'three-stdlib';
import { SelectedSkill } from "../../pages/3DSkillsetPage";
import { Skill } from "../../pages/3DSkillsetPage";

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
}

const SkillGlobe = ({
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
  }
  skills: Skill[] | null,
  selectedSkill: SelectedSkill | null;
  onSelectSkill: (skill: SelectedSkill | null) => void;
}) => {
  if (!skills) return null;

  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<OrbitControlsType>(null);
  const targetCameraPos = useRef<THREE.Vector3 | null>(null);
  const targetControlTarget = useRef<THREE.Vector3 | null>(null);
  const { camera } = useThree();
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; position: THREE.Vector3 } | null>(null);

  // Initialize globe
  const skillLength = skills.length;
  const { geometry, vertices } = useMemo(() => initializeGlobe(config.globeRadius || 2.5, config.globeDetail || 1), []);
  const skillPositions = useMemo(() => vertices.sort(() => Math.random() - 0.5).slice(0, skillLength), []);

  // Camera and control target transition
  useFrame(() => {
    if (!targetCameraPos.current || !targetControlTarget.current || !controlsRef.current) return;

    const lerpAlpha = config.focusTransitionSpeed || 0.1; // Adjust this value for transition speed (higher values make the transition snappier)

    // Camera position transition
    camera.position.lerp(targetCameraPos.current, lerpAlpha);

    // OrbitControls target transition
    controlsRef.current.target.lerp(targetControlTarget.current, lerpAlpha);
    controlsRef.current.update();

    // Stop when close enough (0 won't ensure that works all the time because of the floating values so 0.01 is better value in this case)
    const cameraDist = camera.position.distanceTo(targetCameraPos.current);
    const targetDist = controlsRef.current.target.distanceTo(targetControlTarget.current);

    console.log(cameraDist, cameraDist < 0.01, targetDist < 0.01);
    if (
      cameraDist < 0.01 ||
      targetDist < 0.01
    ) {
      targetCameraPos.current = null;
      targetControlTarget.current = null;
    }
  });

  //Event Handlers
  const nodePointerEnter = useCallback((skill: { name: string; position: THREE.Vector3 }) => {
    if (selectedSkill) return;

    setHoveredSkill({
      name: skill.name,
      position: skill.position.clone().add(new THREE.Vector3(0, 0.35, 0))
    });
  }, []);

  const nodePointerLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  const focusOn = useCallback(({ name, position, description }: { name: string; position: THREE.Vector3, description: string }) => {
    if (!controlsRef.current) return;

    onSelectSkill({
      name,
      description
    });

    const direction = position.clone().normalize();

    targetCameraPos.current = direction.clone().multiplyScalar(4);
    targetControlTarget.current = direction.clone().multiplyScalar(2);
  }, []);

  const clearFocus = useCallback(() => {
    if (!controlsRef.current) return;

    onSelectSkill(null);

    targetCameraPos.current = new THREE.Vector3(0, 0, 5);
    targetControlTarget.current = new THREE.Vector3(0, 0, 0);
  }, []);

  console.log(`Camera: {${camera.position.x}, ${camera.position.y}, ${camera.position.z}}`, `Target: {${controlsRef.current?.target.x}, ${controlsRef.current?.target.y}, ${controlsRef.current?.target.z}}`);

  return (
    <group
      ref={groupRef}
      onPointerMissed={clearFocus}
    >
      <mesh
        geometry={geometry}
      >
        <meshBasicMaterial
          color={config.globeColor || '#000'}
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
          onClick={focusOn}
          onPointerEnter={nodePointerEnter}
          onPointerLeave={nodePointerLeave}
        />
      ))}
      {hoveredSkill && (
        <Html
          position={hoveredSkill.position}
          distanceFactor={8}
          center
          occlude
        >
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
};
export default SkillGlobe;