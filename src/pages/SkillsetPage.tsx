import { forwardRef, useState } from 'react'
import { FeatureList, Badge } from '@/components'
import { PageProps, PageRef } from '@/types/component';
import { AboutContent, Skill } from '@/types/data';
import aboutMe from '@/data/aboutMe';
import skillsData from '@/data/skills';

const Skillset = forwardRef(({ }: PageProps, ref: PageRef) => {
  const [about] = useState<AboutContent | null>(aboutMe);
  const [skills] = useState<{ languages: Skill[], techStacks: Skill[] } | null>(skillsData);

  return (
    <section ref={ref} id='skillset-page' className='w-full h-[200vh] md:h-screen relative snap-start'>
      <div className="h-full md:h-5/6 lg:h-5/6 md:pt-20 bg-black flex flex-col-reverse md:flex-row">
        <div className="h-1/2 md:h-full md:w-1/3 snap-start md:snap-align-none">
          <div className="h-[70%] md:h-full pt-20 md:pt-12 px-4 bg-black">
            <FeatureList
              title='LANGUAGES'
              style='h-1/3'
            >
              {skills?.languages.map(language => {
                const Icon = language.icon;
                return (
                  <li key={language.name} className='pr-4 border-r-4 border-red-500 rounded'>
                    <a className='*:size-16 lg:*:size-24 tooltip' href={language.url} target='_blank' data-tooltip={language.name}>
                      {Icon.component}
                    </a>
                  </li>
                )
              })}
            </FeatureList>
            <FeatureList
              title='SKILLS'
              style='h-2/3'
            >
              {skills?.techStacks.map(techStack => {
                const Icon = techStack.icon;
                return (
                  <li key={techStack.name} className='pr-4 border-r-4 border-red-500 rounded'>
                    <a key={techStack.name} className='tooltip' href={techStack.url} target='_blank' data-tooltip={techStack.name}>
                      {Icon.component}
                    </a>
                  </li>
                )
              })}
            </FeatureList>
          </div>
        </div>
        <div className="h-1/2 md:h-full md:w-2/3 snap-start md:snap-align-none">
          <div className="h-[70%] md:h-full pt-20 md:pt-12 px-4 bg-[#FFE] text-black">
            <p className='md:text-3xl xl:text-4xl font-medium'>{about?.summary}</p>
            <div className="pt-16 xl:pt-24 flex justify-around xl:justify-evenly">
              <Badge
                quantity={about?.totalProjects || 0}
                info='total projects'
              />
              <Badge
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