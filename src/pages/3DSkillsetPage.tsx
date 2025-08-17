import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import SkillGlobe from "@/components/3D_Skillset/SkillGlobe";
import { PiMouseLeftClickFill } from "react-icons/pi";
import { PageRef, ThreeDSkillsetPageProps } from "@/types/component";
import skillsData from "@/data/skills";
import { Skill } from "@/types/data";
import LevelBar from "@/components/LevelBar";
import { useDeviceTypeContext } from "@/context/DeviceTypeContext";
import appConfig, { SkillsetConfig } from "@/config";

const ThreeDSkillsetPage = forwardRef(({ isLoaded }: ThreeDSkillsetPageProps, ref: PageRef) => {
  const skills = useMemo<Skill[] | null>(() => skillsData, []);
  const transitionDuration = 1000; //ms
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const deviceType = useDeviceTypeContext();
  const [config] = useState<SkillsetConfig>(appConfig[deviceType.type].skillset);
  const globeRef = useRef<any>(null);

  const handleClearFocus = useCallback(() => {
    globeRef.current.clearFocus();
  }, []);

  return (
    <section
      ref={ref}
      id='skillset-page'
      className="w-full h-screen bg-black md:h-screen relative snap-start touch-auto"
    >
      <div className="w-full min-h-[60vh] h-[80vh] md:h-[90vh] lg:h-full pt-40 md:pt-32 lg:pt-20 md:px-8">
        <Canvas
          frameloop={isLoaded ? "always" : "never"}
          camera={{ fov: config.fov, near: config.near, far: config.far }}
          className=""
        >
          <SkillGlobe
            ref={globeRef}
            config={{
              color: "#fff",
              focusTransitionSpeed: transitionDuration,
            }}
            skills={skills}
            selectedSkill={selectedSkill}
            onSkillSelected={setSelectedSkill}
          />
        </Canvas>
      </div>
      {/* Instruction Modal */}
      <div
        className="absolute top-24 right-4 w-40 md:w-80 bg-[rgba(28,28,28,0.9)] z-40 shadow-lg rounded-lg px-3 py-2 text-xs"
      >
        <p className="mt-2">
          Click on a skill to see more.
        </p>
        <p className="mt-2">
          {deviceType.type === 'mobile' ? (
            <>
              Tap and hold &darr; to rotate.
            </>
          ) : (
            <>
              Hold <PiMouseLeftClickFill className="inline" size={24} /> and drag to move the globe.
            </>
          )}
        </p>
      </div>
      {/* Legend Modal */}
      <div
        className="absolute top-24 left-0 md:left-4 w-40 h-24 z-40 shadow-lg rounded-lg px-4 py-2 text-xs"
      >
        <LevelBar
          level={3}
          maxLevel={3}
          legend={["Beginner", "Intermediate", "Advanced"]}
          config={{
            layout: "vertical",
            size: 4,
          }} />
      </div>
      {/* Focused Modal */}
      {selectedSkill && (
        <div
          style={deviceType.type === 'mobile' ? {
            top: "calc(50% + 32px)",
            left: "50%",
            transform: "translate(40px, -50%)",
          } : {
            top: "calc(50% + 64px)",
            left: "50%",
            transform: "translate(100px, -50%)",
          }}
          className="fixed w-32 md:w-80 text-[0.5rem] md:text-base bg-[rgba(28,28,28,0.9)] z-40 shadow-lg rounded-lg p-4 animate-modal"
        >
          <div className="text-xs md:text-xl font-bold mb-1">{selectedSkill.name}</div>
          <div className="my-2 md:my-4">
            <LevelBar
              level={selectedSkill.proficiency}
              maxLevel={3}
              config={{
                size: deviceType.type === 'mobile' ? 4 : 8,
              }}
            />
          </div>
          <p className="">{selectedSkill.description}</p>
          <button
            onClick={handleClearFocus}
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
