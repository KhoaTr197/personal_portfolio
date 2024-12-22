import { FC } from 'react'
import { Marquee, CornerInfo } from '../components'

const Landing:FC  = () => {
  return (
    <section id='landing-page' className='w-full h-screen bg-black text-white content-center relative snap-start'>
      <Marquee
        items={[
          '- Trần Hoàng Minh Khoa',
          '- Trần Hoàng Minh Khoa',
        ]}
        marqueeTextStyle='*:mx-8 text-9xl leading-tight'
      />
      <CornerInfo
        position='bottom-left'
        textTransform='uppercase'
      >
        <p>[front-end developer]</p>
        <p>[19 years old]</p> 
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

export default Landing