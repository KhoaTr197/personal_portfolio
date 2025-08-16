import { forwardRef, useCallback, useMemo, useRef, useState, useImperativeHandle, useEffect, memo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import SkillNode from "./SkillNode";
import { Html, OrbitControls } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from 'three-stdlib';
import { easeInOutQuad, getSkillTexture } from "@/utils";
import { SkillGlobeProps, SkillGlobeRef, SkillNodeInterface, TransistionPos } from "@/types/component";

// Initialize globe
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

const SkillGlobe = forwardRef<SkillGlobeRef, SkillGlobeProps>(({
  config,
  skills,
  selectedSkill,
  onSkillSelected
}, ref) => {
  if (!skills) return null;

  const { camera } = useThree();
  const skillTextures = useMemo(() => skills?.map((skill) => getSkillTexture(skill)) ?? [], [skills]);
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; position: THREE.Vector3 } | null>(null);

  const tempSkillVec = useRef<THREE.Vector3>(new THREE.Vector3()); // Temp vector for interpolation
  const groupRef = useRef<THREE.Group | null>(null); // Local group ref for the SkillGlobe component
  const controlsRef = useRef<OrbitControlsType | null>(null);

  // Transition variables
  const startPos = useRef<TransistionPos>({
    camera: null,
    target: null,
  });
  const targetPos = useRef<TransistionPos>({
    camera: null,
    target: null,
  });
  const startTime = useRef<number | null>(null);
  const transistionType = useRef<'focus' | 'clear' | null>(null);
  const isTransitioning = useRef(false);

  const globeConfig = useMemo(() => ({
    radius: 2.5,
    detail: 1,
    color: '#000',
    focusTransitionSpeed: 1000,
    ...config,
  }), [config]);

  // Expose methods or refs to parent
  useImperativeHandle(ref, () => ({
    focusOn,
    clearFocus,
    isTransitioning: () => isTransitioning.current,
  }));

  // Initialize globe and skill positions
  const skillLength = skills.length;
  const { geometry, vertices } = useMemo(() => initializeGlobe(globeConfig.radius, globeConfig.detail), [globeConfig.radius, globeConfig.detail]);
  const skillPositions = useMemo(() => vertices.sort(() => Math.random() - 0.5).slice(0, skillLength), [vertices, skillLength]);

  // Transition animation
  useFrame(() => {
    if (
      !startPos.current.camera ||
      !startPos.current.target ||
      !targetPos.current.camera ||
      !targetPos.current.target ||
      !controlsRef.current ||
      !startTime.current
    ) return;

    const elapsedTime = performance.now() - startTime.current;
    //apply ease-in-out for smooth transition
    const alpha = easeInOutQuad(Math.min(elapsedTime / globeConfig.focusTransitionSpeed, 1));

    // Interpolate camera position and target
    tempSkillVec.current.copy(startPos.current.camera).lerp(targetPos.current.camera, alpha);
    camera.position.copy(tempSkillVec.current);
    tempSkillVec.current.copy(startPos.current.target).lerp(targetPos.current.target, alpha);
    controlsRef.current.target.copy(tempSkillVec.current);

    if (alpha >= 1) {
      // Set final position
      if (transistionType.current === 'clear') {
        camera.position.copy(targetPos.current.camera);
        controlsRef.current.target.copy(targetPos.current.target);
        controlsRef.current.update();

        startPos.current = {
          camera: null,
          target: null,
        };
      }

      // Clear targets to stop interpolation
      targetPos.current = {
        camera: null,
        target: null,
      };
      transistionType.current = null;

      isTransitioning.current = false;

      controlsRef.current.enableRotate = true; // Re-enable manual rotation
    }
  });

  // Event handlers
  const nodePointerEnter = useCallback(({ skill, position }: SkillNodeInterface) => {
    if (selectedSkill) return;
    setHoveredSkill({
      name: skill.name,
      position: position.clone()
    });
  }, [selectedSkill]);

  const nodePointerLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  // Update state -> get positions -> set transition type & disable manual rotation
  const focusOn = useCallback(({ skill, position }: SkillNodeInterface) => {
    if (!controlsRef.current || isTransitioning.current) return;
    onSkillSelected(skill);
    tempSkillVec.current.copy(position); // Copy the position for later use

    const direction = position.clone().normalize();

    startPos.current = {
      camera: camera.position.clone(),
      target: controlsRef.current.target.clone(),
    };

    targetPos.current = {
      camera: direction.clone().multiplyScalar(4),
      target: direction.clone(),
    };

    startTime.current = performance.now();
    transistionType.current = 'focus';

    isTransitioning.current = true;
    controlsRef.current.enableRotate = false;
  }, []);

  // Update state -> get positions -> set transition type (the "enable manual rotation" is done in the last frame of transition)
  const clearFocus = useCallback(() => {
    if (!controlsRef.current || isTransitioning.current || !selectedSkill) return;
    onSkillSelected(null);

    targetPos.current = {
      camera: startPos.current.camera,
      target: startPos.current.target,
    };

    startPos.current = {
      camera: camera.position.clone(),
      target: controlsRef.current.target.clone(),
    };

    startTime.current = performance.now();
    transistionType.current = 'clear';

    isTransitioning.current = true;
  }, [selectedSkill]);

  const handleClick = selectedSkill ? null : focusOn;

  // Cleanup
  useEffect(() => {
    return () => {
      controlsRef.current?.dispose();
      geometry?.dispose();
    };
  }, [geometry]);

  return (
    <group
      ref={groupRef}
      onPointerMissed={clearFocus}
    >
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={globeConfig.color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {skillPositions.map((pos, idx) => (
        <SkillNode
          key={idx}
          position={pos}
          skill={skills[idx]}
          texture={skillTextures[idx]}
          onClick={handleClick}
          onPointerEnter={nodePointerEnter}
          onPointerLeave={nodePointerLeave}
        />
      ))}

      {hoveredSkill && (
        <Html position={hoveredSkill.position} distanceFactor={8} center>
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
