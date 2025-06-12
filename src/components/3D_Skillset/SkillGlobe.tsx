import { useThree } from "@react-three/fiber";
import { useCallback, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import * as Devicon from "devicons-react";
import SkillNode from "./SkillNode";
import { Html, OrbitControls } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from 'three-stdlib';

const skills = [
  { name: "HTML", icon: <Devicon.Html5Original size={48} /> },
  { name: "CSS", icon: <Devicon.Css3Original size={48} /> },
  { name: "JavaScript", icon: <Devicon.JavascriptOriginal size={48} /> },
  { name: "PHP", icon: <Devicon.PhpOriginal size={48} /> },
  { name: "Python", icon: <Devicon.PythonOriginal size={48} /> },
  { name: "C++", icon: <Devicon.CplusplusOriginal size={48} /> },
  { name: "TypeScript", icon: <Devicon.TypescriptOriginal size={48} /> },
  { name: "NodeJS", icon: <Devicon.NodejsOriginal size={48} /> },
  { name: "ExpressJS", icon: <Devicon.ExpressOriginal fill="#fff" size={48} /> },
  { name: "MongoDB", icon: <Devicon.MongodbOriginal size={48} /> },
  { name: "MySQL", icon: <Devicon.MysqlOriginal size={48} /> },
  { name: "Firebase", icon: <Devicon.FirebaseOriginal size={48} /> },
  { name: "React", icon: <Devicon.ReactOriginal size={48} /> },
  { name: "Tailwind CSS", icon: <Devicon.TailwindcssOriginal size={48} /> },
  { name: "Figma", icon: <Devicon.FigmaOriginal size={48} /> },
  { name: "Vite", icon: <Devicon.VitejsOriginal size={48} /> },
  { name: "Docker", icon: <Devicon.DockerPlainWordmark size={48} /> },
  { name: "GitHub", icon: <Devicon.GithubOriginal size={48} />, forceFill: "#fff" },
];

const SkillGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<OrbitControlsType>(null);
  const { camera } = useThree();
  const [focused, setFocused] = useState<THREE.Vector3 | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; position: THREE.Vector3 } | null>(null);

  const radius = 2.5;
  const sphereGeometry = useMemo(() => new THREE.IcosahedronGeometry(radius, 1), []);
  const vertices = useMemo(() => {
    const posAttr = sphereGeometry.attributes.position;
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

    return verts.sort(() => Math.random() - 0.5).slice(0, skills.length);
  }, []);

  const nodePointerEnter = useCallback((skill: { name: string; position: THREE.Vector3 }) => {
    setHoveredSkill({
      name: skill.name,
      position: skill.position.clone().add(new THREE.Vector3(0, 0.35, 0))
    });
  }, []);

  const nodePointerLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  const focusOn = useCallback((pos: THREE.Vector3) => {
    setFocused(pos);

    const direction = pos.clone().normalize();
    const distance = 4;

    camera.position.copy(direction.clone().multiplyScalar(distance));

    controlsRef.current?.target.copy(direction.clone().multiplyScalar(2));
    controlsRef.current?.update();
  }, []);

  const clearFocus = useCallback(() => {
    setFocused(null);

    camera.position.copy(new THREE.Vector3(0, 0, 5));
    controlsRef.current?.target.set(0, 0, 0);
    controlsRef.current?.update();
  }, []);

  return (
    <group
      ref={groupRef}
      onPointerMissed={clearFocus}
    >
      <mesh
        geometry={sphereGeometry}
      >
        <meshBasicMaterial
          color="white"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      {vertices.map((vertex, index) => (
        <SkillNode
          key={index}
          position={vertex}
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
        enableZoom={false}
        enablePan={false}
      // autoRotate={focused ? false : true}
      // autoRotateSpeed={2}
      />
    </group>
  );
};
export default SkillGlobe;