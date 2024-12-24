import { FC } from 'react'

type MarqueeProps = {
  items: string[],
  duration?: number,
  direction?: 'normal' | 'reverse'
  marqueeBarStyle?: string,
  marqueeTextStyle?: string,
}

const Marquee:FC<MarqueeProps> = ({
  items,
  duration=20,
  direction='normal',
  marqueeBarStyle,
  marqueeTextStyle
}) => {
  const animationDuration = String(duration) + 's'

  return (
    <div className={`w-full ${marqueeBarStyle} overflow-x-hidden overflow-y-clip`}>
      <ul 
      className={`flex items-center justify-center w-max ${marqueeTextStyle} animate-infinite-scroll`}
      style={{
        animationDuration: animationDuration,
        animationDirection: direction
      }}>
        {items.map((item, idx) => {
          return (
            <li key={idx}>
              {item}
            </li>
          )
        })}
        {items.map((item, idx) => {
          return (
            <li key={idx}>
              {item}
            </li>
          )
        })}
      </ul>              
    </div>
  )
}

export default Marquee