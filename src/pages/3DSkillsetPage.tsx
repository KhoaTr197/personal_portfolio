import { forwardRef, ReactNode, Ref, useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import SkillGlobe from "../components/3D_Skillset/SkillGlobe";
import Devicon from 'devicons-react'
import { PiMouseLeftClickFill } from "react-icons/pi";
import { PageProps, PageRef } from "../@types/component";

const skillIconMap: Record<string, { icon: ReactNode, forceFill?: string }> = {
  'JavaScript': {
    icon: <Devicon.JavascriptOriginal size={48} />,
  },
  'TypeScript': {
    icon: <Devicon.TypescriptOriginal size={48} />,
  },
  'C++': {
    icon: <Devicon.CplusplusOriginal size={48} />,
  },
  'PHP': {
    icon: <Devicon.PhpOriginal size={48} />,
  },
  'Python': {
    icon: <Devicon.PythonOriginal size={48} />,
  },
  'HTML': {
    icon: <Devicon.Html5Original size={48} />,
  },
  'CSS': {
    icon: <Devicon.Css3Original size={48} />,
  },
  'NodeJS': {
    icon: <Devicon.NodejsOriginal size={48} />,
  },
  'ExpressJS': {
    icon: <Devicon.ExpressOriginal fill='#fff' size={48} />,
  },
  'React': {
    icon: <Devicon.ReactOriginal size={48} />,
  },
  'Firebase': {
    icon: <Devicon.FirebaseOriginal size={48} />,
  },
  'MongoDB': {
    icon: <Devicon.MongodbOriginal size={48} />,
  },
  'MySQL': {
    icon: <Devicon.MysqlOriginal size={48} />,
  },
  'Vite': {
    icon: <Devicon.VitejsOriginal size={48} />,
  },
  'Tailwind CSS': {
    icon: <Devicon.TailwindcssOriginal size={48} />,
  },
  'Figma': {
    icon: <Devicon.FigmaOriginal size={48} />,
  },
  'Docker': {
    icon: <Devicon.DockerPlainWordmark size={48} />,
  },
  'GitHub': {
    icon: <Devicon.GithubOriginal size={48} />,
    forceFill: "#fff"
  },
}

export interface SelectedSkill {
  name: string;
  description: string;
}

export interface Skill {
  name: string;
  url: string;
  icon: {
    component: ReactNode;
    forceFill?: string;
  };
  description: string;
}

const ThreeDSkillsetPage = forwardRef(({ }: PageProps, ref: PageRef) => {
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const [transitionDuration] = useState(1000); //ms
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | null>(null);
  const globeRef = useRef<any>();

  useEffect(() => {
    fetch("/content/skillset.json")
      .then(res => res.json())
      .then(data => {
        const newData: Skill[] = data.map((skill: Skill) => {
          const iconData = skillIconMap[skill.name];
          return {
            ...skill,
            icon: {
              component: iconData.icon,
              forceFill: iconData.forceFill,
            },
          };
        });
        setSkills(newData)
      });
  }, []);

  const handleSelectSkill = useCallback((skill: SelectedSkill | null) => {
    setSelectedSkill(skill);
  }, []);

  return (
    <section ref={ref} id='skillset-page' className="w-full h-[200vh] bg-black md:h-screen relative snap-start">
      <Canvas
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
