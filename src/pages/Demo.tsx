import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import SkillGlobe from "../components/3D_Skillset/SkillGlobe";

export const Demo = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
      className="w-full h-full bg-black"
    >
      <SkillGlobe />
    </Canvas>
  );
};
