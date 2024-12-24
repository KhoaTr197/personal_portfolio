import { forwardRef, ReactNode, Ref,  } from 'react'
import { Marquee } from '../components'

type LandingProps = {
  children?: ReactNode;
}
type LandingRef = Ref<HTMLElement>

const Landing = forwardRef(({}: LandingProps, ref: LandingRef) => {
  return (
    <section ref={ref} id='landing-page' className='w-full h-screen bg-black text-white content-center relative snap-start'>
      <Marquee
        items={[
          '-',
          'Trần Hoàng Minh Khoa',
          '-',
          'Trần Hoàng Minh Khoa',
        ]}
        duration={50}
        marqueeTextStyle='*:mx-8 text-9xl leading-tight'
      />
    </section>
  )
})
export default Landing