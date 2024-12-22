import { FC } from 'react'

type BadgeProps = {
  quantity: number,
  info: string
} 

const Badge:FC<BadgeProps> = ({
  quantity,
  info
}) => {
  const sign = quantity > 0 ? '+' : '-';
  const newQuantity = quantity > 10 ? quantity : '0' + Math.abs(quantity)

  return (
    <div className='relative flex flex-col items-end'>
      <div className='absolute top-0 right-full text-[4rem] w-fit h-fit leading-none'>{sign}</div>
      <div className='w-48 text-10xl'>{newQuantity}</div>
      <p className='w-48 text-right font-medium text-4xl uppercase text-wrap'>{info}</p>
    </div>
  )
}

export default Badge