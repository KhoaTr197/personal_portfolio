import { useCallback, useMemo, useRef } from 'react';
import { Mesh, Matrix4, Vector3, Quaternion, DoubleSide } from 'three';
import { SkillNodeInterface, SkillNodeProps } from '@/types/component';
import { ThreeEvent } from '@react-three/fiber';

const SkillNode = ({
  position,
  skill,
  texture,
  onClick,
  onPointerEnter,
  onPointerLeave,
}: SkillNodeProps) => {
  const meshRef = useRef<Mesh>(null);

  const quaternion = useMemo(() => {
    const lookAtMatrix = new Matrix4().lookAt(position, new Vector3(0, 0, 0), new Vector3(0, 1, 0));
    return new Quaternion().setFromRotationMatrix(lookAtMatrix);
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
        side={DoubleSide}
      />
    </mesh>
  ) : null;
};

export default SkillNode;
