import { BadgeProps, BadgeRef, OdometerRef } from '@/types/component';
import Odometer from './Odometer';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Badge = forwardRef<BadgeRef, BadgeProps>(({
  quantity,
  info
}, ref) => {
  const sign = quantity > 0 ? '+' : '-';
  const odometerRef = useRef<OdometerRef>(null);

  useImperativeHandle(ref, () => ({
    start() {
      if (odometerRef.current)
        odometerRef.current.start();
    },
    stop() {
      if (odometerRef.current)
        odometerRef.current.stop();
    },
    reset() {
      if (odometerRef.current)
        if (odometerRef.current.reset) odometerRef.current.reset();
    }
  }))

  return (
    <div className='w-fit flex flex-col items-center md:items-end'>
      <div className='w-fit lg:w-48 text-[5rem] md:text-8xl lg:text-10xl relative leading-none'>
        <div className='absolute top-0 right-full text-4xl lg:text-[4rem] w-fit h-fit'>{sign}</div>
        <Odometer
          ref={odometerRef}
          value={0}
          target={quantity}
          duration={2000}
          autoStart={false}
          format='dd'
          className="text-[5rem] md:text-8xl lg:text-10xl"
        />
      </div>
      <div className='w-40 lg:w-48 text-center md:text-right font-medium text-xl md:text-2xl lg:text-4xl uppercase text-wrap'>{info}</div>
    </div>
  )
})

export default Badge