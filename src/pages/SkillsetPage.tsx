import { forwardRef, ReactNode, useEffect, useState } from 'react'
import { FeatureList, Badge } from '../components'
import Devicon from 'devicons-react'
import { PageProps, PageRef } from '../@types/component';

interface About {
  summary: string;
  totalProjects: number;
  yearsExperience: number;
}

interface Skillset {
  languages: Language[];
  techStacks: TechStack[];
}

interface Language {
  name: string;
  url: string;
  icon: string;
}

interface TechStack {
  name: string;
  url: string;
  icon: string;
}

const languageIconMap: Record<string, ReactNode> = {
  'JavaScript': <Devicon.JavascriptOriginal size={48} />,
  'TypeScript': <Devicon.TypescriptOriginal size={48} />,
  'C++': <Devicon.CplusplusOriginal size={48} />,
  'PHP': <Devicon.PhpOriginal size={48} />,
  'Python': <Devicon.PythonOriginal size={48} />
}

const techStackIconMap: Record<string, ReactNode> = {
  'HTML': <Devicon.Html5Original size={48} />,
  'CSS': <Devicon.Css3Original size={48} />,
  'NodeJS': <Devicon.NodejsOriginal size={48} />,
  'ExpressJS': <Devicon.ExpressOriginal fill='#fff' size={48} />,
  'React': <Devicon.ReactOriginal size={48} />,
  'Firebase': <Devicon.FirebaseOriginal size={48} />,
  'MongoDB': <Devicon.MongodbOriginal size={48} />,
  'MySQL': <Devicon.MysqlOriginal size={48} />,
  'Vite': <Devicon.VitejsOriginal size={48} />,
  'Tailwind CSS': <Devicon.TailwindcssOriginal size={48} />,
  'Figma': <Devicon.FigmaOriginal size={48} />,
  'Docker': <Devicon.DockerOriginal size={48} />,
  'GitHub': <Devicon.GithubOriginal className='[&>g]:fill-white' size={48} />
}

const Skillset = forwardRef(({}: PageProps, ref: PageRef) => {
  const [about, setAbout] = useState<About | null>(null);
  const [skills, setSkills] = useState<Skillset | null>(null);

  useEffect(() => {
    fetch("/content/about_me.json")
      .then(res => res.json())
      .then(data => setAbout(data));

    fetch("/content/skillset.json")
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

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
                const Icon = languageIconMap[language.name];
                return (
                  <li key={language.name}>
                    <a className='*:size-16 lg:*:size-24 tooltip' href={language.url} target='_blank' data-tooltip={language.name}>
                      {Icon}
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
                const Icon = techStackIconMap[techStack.name];
                return (
                  <a key={techStack.name} className='tooltip' href={techStack.url} target='_blank' data-tooltip={techStack.name}>
                    {Icon}
                  </a>
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