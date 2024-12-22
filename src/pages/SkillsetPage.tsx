import { FC } from 'react'
import { FeatureList, CornerInfo, Badge } from '../components'
import Devicon from 'devicons-react'

const Skillset:FC  = () => {
  return (
    <section id='skillset-page' className='w-full h-screen relative snap-start'>
      <div className="pt-20 h-5/6 bg-black flex">
        <div className="pt-12 px-4 w-1/3">
          <FeatureList
            title='LANGUAGES'
            style='h-1/3'
          >           
            <Devicon.JavascriptOriginal size={48}/>
            <Devicon.TypescriptOriginal size={48} />
            <Devicon.CplusplusOriginal size={48} />
            <Devicon.PhpOriginal size={48} />
            <Devicon.PythonOriginal size={48} />
          </FeatureList>
          <FeatureList
            title='SKILLS'
            style='h-2/3'
          >
            <Devicon.Html5Original size={48} />
            <Devicon.Css3Original size={48} />
            <Devicon.NodejsOriginal size={48} />
            <Devicon.ExpressOriginal fill='#fff' size={48} />
            <Devicon.ReactOriginal size={48} />
            <Devicon.FirebaseOriginal size={48} />
            <Devicon.MongodbOriginal size={48} />
            <Devicon.MysqlOriginal size={48} />
            <Devicon.VitejsOriginal size={48} />
            <Devicon.TailwindcssOriginal size={48} />
            <Devicon.FigmaOriginal size={48} />
            <Devicon.DockerOriginal size={48} />
            <Devicon.GithubOriginal className='[&>g]:fill-white' size={48} xlinkTitle="search-icon-description"/>
          </FeatureList>
        </div>
        <div className="w-2/3 pt-12 px-4 bg-[#FFE] text-black">
          <p className='text-4xl font-medium'>My expertise, creativity and technical skills allow me to solve your business problems efficiently. I leverage the latest technologies and coding practices to deliver innovative, high-quality solutions that drive your success.</p>
          <div className="pt-24 flex justify-evenly">
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
      <CornerInfo
        position='bottom-left'
        textTransform='uppercase'
      >
        <p>[about]</p>
      </CornerInfo>
      <CornerInfo
        position='bottom-right'
        textTransform='uppercase'
      >
        <p>[<span className='mr-1'>&darr;</span>scroll down]</p>
      </CornerInfo>
    </section>
  )
}

export default Skillset