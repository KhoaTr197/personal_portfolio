import { forwardRef, useEffect, useRef, useState } from 'react'
import { FeatureList, Badge } from '@/components'
import { BadgeRef, PageProps } from '@/types/component';
import { AboutContent, Skill } from '@/types/data';
import aboutMe from '@/data/aboutMe';
import skillsData from '@/data/skills';
import LevelBar from '@/components/LevelBar';
import { useDeviceTypeContext } from '@/context/DeviceTypeContext';

const Skillset = forwardRef<HTMLElement, PageProps>(({
  shouldPlayAnimation
}, ref) => {
  const [about] = useState<AboutContent | null>(aboutMe);
  const [skills] = useState<{ languages: Skill[], techStacks: Skill[] } | null>(skillsData);
  const color: {
    [index: number]: string
  } = {
    1: "bg-[#FFE]",
    2: "bg-[#FFDB58]",
    3: "bg-[#FF9500]",
  }
  const iconSize: {
    [index: string]: number
  } = {
    "mobile": 32,
    "tablet": 48,
    "desktop": 48
  }
  const deviceType = useDeviceTypeContext();
  const badgeRefs = useRef<BadgeRef[]>([]);

  useEffect(() => {
    if (shouldPlayAnimation) {
      badgeRefs.current.forEach((ref) => {
        ref.start();
      });
    } else {
      badgeRefs.current.forEach((ref) => {
        ref.reset();
      });
    }
  }, [shouldPlayAnimation])

  return (
    <section ref={ref} id='skillset-page' className='w-full h-[200vh] md:h-screen relative snap-start'>
      <div className="h-full md:h-5/6 lg:h-5/6 md:pt-20 bg-black flex flex-col-reverse md:flex-row">
        <div className="h-1/2 md:h-full md:w-1/3 snap-start md:snap-align-none">
          <div className="h-[70%] md:h-full pt-20 md:pt-12 px-4 bg-black">
            <FeatureList
              title='LANGUAGES'
              style='h-1/4'
            >
              {skills?.languages.map(language => {
                const Icon = language.icon;
                const size = iconSize[deviceType.type];
                return (
                  <li key={language.name} className={`relative`} style={{ width: size, height: size }}>
                    <a className='tooltip' href={language.url} target='_blank' data-tooltip={language.name}>
                      {Icon.component(size)}
                    </a>
                    <span className={`absolute -bottom-2 left-0 h-1 w-full rounded ${color[language.proficiency]}`}></span>
                  </li>
                )
              })}
            </FeatureList>
            <FeatureList
              title='SKILLS'
              style='h-1/2'
            >
              {skills?.techStacks.map(techStack => {
                const Icon = techStack.icon;
                const size = iconSize[deviceType.type];
                return (
                  <li key={techStack.name} className={`relative`} style={{ width: size, height: size }}>
                    <a className='tooltip' href={techStack.url} target='_blank' data-tooltip={techStack.name}>
                      {Icon.component(size)}
                    </a>
                    <span className={`absolute -bottom-2 left-0 h-1 w-full rounded ${color[techStack.proficiency]}`}></span>
                  </li>
                )
              })}
            </FeatureList>
            <div
              className="text-xs h-1/4 flex flex-col-reverse"
            >
              <div className="py-4">
                <LevelBar
                  level={3}
                  maxLevel={3}
                  legend={["Beginner", "Intermediate", "Advanced"]}
                  config={{
                    layout: "vertical",
                    size: 4,
                  }} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/2 md:h-full md:w-2/3 snap-start md:snap-align-none">
          <div className="h-[70%] md:h-full pt-20 md:pt-12 px-4 bg-[#FFE] text-black">
            <p className='md:text-3xl xl:text-4xl font-medium'>{about?.summary}</p>
            <div className="pt-16 xl:pt-24 flex justify-around xl:justify-evenly">
              <Badge
                ref={(el: BadgeRef | null) => {
                  if (el) badgeRefs.current.push(el)
                }}
                quantity={about?.totalProjects || 0}
                info='total projects'
              />
              <Badge
                ref={(el: BadgeRef | null) => {
                  if (el) badgeRefs.current.push(el)
                }}
                quantity={about?.yearsExperience || 0}
                info='year of experience'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
export default Skillset