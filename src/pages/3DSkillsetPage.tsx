import { forwardRef, useCallback, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import SkillGlobe from "@/components/3D_Skillset/SkillGlobe";
import { PiMouseLeftClickFill } from "react-icons/pi";
import { PageRef, ThreeDSkillsetPageProps } from "@/types/component";
import { SelectedSkill } from "@/types/state";
import skillsData from "@/data/skills";
import { Skill } from "@/types/data";

const ThreeDSkillsetPage = forwardRef(({ isLoaded }: ThreeDSkillsetPageProps, ref: PageRef) => {
  const [skills] = useState<Skill[] | null>(skillsData);
  const [transitionDuration] = useState(1000); //ms
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | null>(null);
  const globeRef = useRef<any>();

  const handleSelectSkill = useCallback((skill: SelectedSkill | null) => {
    setSelectedSkill(skill);
  }, []);

  return (
    <section ref={ref} id='skillset-page' className="w-full h-[200vh] bg-black md:h-screen relative snap-start">
      <Canvas
        frameloop={isLoaded ? "always" : "never"}
        camera={{ fov: 70, near: 0.1, far: 1000 }}
        className="w-full h-full pt-20"
      >
        <SkillGlobe
          ref={globeRef}
          config={{
            globeColor: "#fff",
            focusTransitionSpeed: transitionDuration,
          }}
          skills={skills}
          selectedSkill={selectedSkill}
          onSelectSkill={handleSelectSkill}
        />
      </Canvas>
      <div
        className="absolute top-24 right-4 w-80 bg-[rgba(28,28,28,0.9)] z-40 shadow-lg rounded-lg px-4 py-2 text-xs"
      >
        <p className="mt-2">
          Click on a skill to see more
        </p>
        <p className="mt-2">
          Hold <PiMouseLeftClickFill className="inline" size={24} /> and drag to move the globe
        </p>
      </div>
      {selectedSkill && (
        <div
          style={{
            top: "calc(50% + 64px)",
            left: "50%",
            transform: "translate(100px, -50%)",
          }}
          className="fixed w-80 bg-[rgba(28,28,28,0.9)] z-40 shadow-lg rounded-lg p-3 animate-modal"
        >
          <div className="font-bold mb-1">{selectedSkill.name}</div>
          <p className="">{selectedSkill.description}</p>
          <button
            onClick={() => globeRef.current.clearFocus()}
            className="mt-2 text-blue-500 hover:underline"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
});
export default ThreeDSkillsetPage;
