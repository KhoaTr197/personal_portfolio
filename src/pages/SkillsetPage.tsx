import { forwardRef, ReactNode, Ref, useState } from 'react'
import { FeatureList, Badge } from '../components'
import Devicon from 'devicons-react'

type SkillsetProps = {
  children?: ReactNode;
}
type SkillsetRef = Ref<HTMLElement>

const Skillset = forwardRef(({}: SkillsetProps, ref: SkillsetRef) => {
  const [skillset, setSkillset] = useState({
    languages: [
      {
        name: 'Javascript',
        url: 'https://en.wikipedia.org/wiki/JavaScript',
        icon: <Devicon.JavascriptOriginal size={48}/>,
      },
      {
        name: 'Typescript',
        url: 'https://www.typescriptlang.org/',
        icon: <Devicon.TypescriptOriginal size={48} />,
      },
      {
        name: 'C++',
        url: 'https://en.wikipedia.org/wiki/C%2B%2B',
        icon: <Devicon.CplusplusOriginal size={48} />,
      },
      {
        name: 'PHP',
        url: 'https://www.php.net/',
        icon: <Devicon.PhpOriginal size={48} />,
      },
      {
        name: 'Python',
        url: 'https://www.python.org/',
        icon: <Devicon.PythonOriginal size={48} />
      }
    ],
    techStacks: [
      {
        name: 'HTML',
        url: 'https://en.wikipedia.org/wiki/HTML',
        icon: <Devicon.Html5Original size={48} />
      },
      {
        name: 'CSS',
        url: 'https://en.wikipedia.org/wiki/CSS',
        icon: <Devicon.Css3Original size={48} />,
      },
      {
        name: 'NodeJS',
        url: 'https://nodejs.org/en',
        icon: <Devicon.NodejsOriginal size={48} />,
      },
      {
        name: 'ExpressJS',
        url: 'https://expressjs.com/',
        icon: <Devicon.ExpressOriginal fill='#fff' size={48} />,
      },
      {
        name: 'React',
        url: 'https://react.dev/',
        icon: <Devicon.ReactOriginal size={48} />,
      },
      {
        name: 'Firebase',
        url: 'https://firebase.google.com/',
        icon: <Devicon.FirebaseOriginal size={48} />,
      },
      {
        name: 'MongoDB',
        url: 'https://www.mongodb.com/',
        icon: <Devicon.MongodbOriginal size={48} />,
      },
      {
        name: 'MySQL',
        url: 'https://www.mysql.com/',
        icon: <Devicon.MysqlOriginal size={48} />,
      },
      {
        name: 'Vite',
        url: 'https://vite.dev/',
        icon: <Devicon.VitejsOriginal size={48} />,
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        icon: <Devicon.TailwindcssOriginal size={48} />,
      },
      {
        name: 'Figma',
        url: 'https://www.figma.com/',
        icon: <Devicon.FigmaOriginal size={48} />,
      },
      {
        name: 'Docker',
        url: 'https://www.docker.com/',
        icon: <Devicon.DockerOriginal size={48} />,
      },
      {
        name: 'GitHub',
        url: 'https://github.com/',
        icon: <Devicon.GithubOriginal className='[&>g]:fill-white' size={48}/>
      }
    ]
  })

  return (
    <section ref={ref} id='skillset-page' className='w-full h-screen relative snap-start'>
      <div className="pt-20 h-full md:h-5/6 lg:h-5/6 bg-black flex flex-col md:flex-row">
        <div className="md:pt-12 px-4 md:w-1/3">
          <FeatureList
            title='LANGUAGES'
            style='h-1/3'
          >
            {skillset.languages.map(language => {
              return (
                <li key={language.name}>
                  <a className='*:size-16 lg:*:size-24 tooltip' href={language.url} target='_blank' data-tooltip={language.name}>
                    {language.icon}
                  </a>
                </li>
              )
            })}
          </FeatureList>
          <FeatureList
            title='SKILLS'
            style='h-2/3'
          >
            {skillset.techStacks.map(techStack => {
              return (
                <a key={techStack.name} className='tooltip' href={techStack.url} target='_blank' data-tooltip={techStack.name}>
                  {techStack.icon}
                </a>
              )
            })}
          </FeatureList>
        </div>
        <div className="md:w-2/3 pt-12 px-4 bg-[#FFE] text-black">
          <p className='md:text-3xl xl:text-4xl font-medium'>My expertise, creativity and technical skills allow me to solve your business problems efficiently. I leverage the latest technologies and coding practices to deliver innovative, high-quality solutions that drive your success.</p>
          <div className="pt-16 xl:pt-24 flex justify-around xl:justify-evenly">
            <Badge 
              quantity={2}
              info='total projects'
            />
            <Badge 
              quantity={2}
              info='year of experience'
            />
          </div>
        </div>
      </div>
    </section>
  )
})
export default Skillset