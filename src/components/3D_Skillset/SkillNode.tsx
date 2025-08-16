import { memo, useCallback, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { SkillNodeInterface, SkillNodeProps } from '@/types/component';
import { ThreeEvent } from '@react-three/fiber';

const SkillNode = memo(({
  position,
  skill,
  texture,
  onClick,
  onPointerEnter,
  onPointerLeave,
}: SkillNodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const quaternion = useMemo(() => {
    const lookAtMatrix = new THREE.Matrix4().lookAt(position, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
    return new THREE.Quaternion().setFromRotationMatrix(lookAtMatrix);
  }, [position]);

  const handleClick = useCallback(() => {
    onClick?.({ skill, position } as SkillNodeInterface);
  }, [onClick, skill, position]);

  const handlePointerEnter = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onPointerEnter({ skill, position });
  }, [onPointerEnter, skill, position]);

  const handlePointerLeave = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onPointerLeave();
  }, [onPointerLeave]);

  return texture ? (
    <mesh
      position={position}
      quaternion={quaternion}
      ref={meshRef}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <planeGeometry args={[0.4, 0.4]} />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
        toneMapped={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  ) : null;
});

export default SkillNode;
