import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { renderToStaticMarkup } from 'react-dom/server';

const SkillNode = ({
  position,
  skill,
  onClick,
  onPointerEnter,
  onPointerLeave,
}: {
  position: THREE.Vector3;
  skill: {
    name: string;
    icon: JSX.Element;
    forceFill?: string;
  };
  onClick: (position: THREE.Vector3) => void;
  onPointerEnter: (skill: { name: string, position: THREE.Vector3 }) => void;
  onPointerLeave: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  const generateTextureFromIcon = useCallback(({ icon, forceFill }: { icon: JSX.Element, forceFill?: string }) => {
    let svgMarkup = renderToStaticMarkup(icon);
    if (forceFill) {
      svgMarkup = svgMarkup.replace(/fill=".*?"/, `fill="${forceFill}"`);
    }
    const blob = new Blob([svgMarkup], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const img = new Image();
    img.onload = () => {
      const texture = new THREE.Texture(img);
      texture.needsUpdate = true;
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      setTexture(texture);
      URL.revokeObjectURL(url);
    };
    img.src = url;
    return () => URL.revokeObjectURL(url);
  }, []);

  useEffect(() => {
    const cleanup = generateTextureFromIcon(skill);
    return () => {
      if (texture) texture.dispose();
      cleanup();
    };
  }, [skill.icon]);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.copy(position);

      // Rotate the plane to face outward from the sphere center
      meshRef.current.quaternion.setFromRotationMatrix(
        new THREE.Matrix4().lookAt(
          position,
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, 1, 0) // up vector
        )
      );
    }
  }, [position, texture]);

  return (
    <group>
      {texture && (
        <mesh
          ref={meshRef}
          onClick={() => onClick(position)}
          onPointerEnter={(e) => {
            e.stopPropagation(); // Prevent bubbling to globe
            onPointerEnter({ name: skill.name, position });
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            onPointerLeave();
          }}
        >
          <planeGeometry args={[0.4, 0.4]} />
          <meshBasicMaterial
            map={texture}
            transparent
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      )
      }
    </group >
  );
};

export default SkillNode;
