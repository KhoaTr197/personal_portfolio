import { BadgeProps } from '../@types/component';

const Badge = ({
  quantity,
  info
}: BadgeProps) => {
  const sign = quantity > 0 ? '+' : '-';
  const newQuantity = quantity > 10 ? quantity : '0' + Math.abs(quantity)

  return (
    <div className='w-fit flex flex-col items-center md:items-end'>
      <div className='w-fit lg:w-48 text-[5rem] md:text-8xl lg:text-10xl relative leading-none'>
        <div className='absolute top-0 right-full text-[4rem] w-fit h-fit'>{sign}</div>
        {newQuantity}
      </div>
      <div className='w-40 lg:w-48 text-center md:text-right font-medium text-xl md:text-2xl lg:text-4xl uppercase text-wrap'>{info}</div>
    </div>
  )
}

export default Badge