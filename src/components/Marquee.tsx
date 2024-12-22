import { FC } from 'react'

type MarqueeProps = {
  items: string[],
  marqueeBarStyle?: string,
  marqueeTextStyle?: string,
}

const Marquee:FC<MarqueeProps> = ({
  items,
  marqueeBarStyle,
  marqueeTextStyle
}) => {
  return (
    <div className={`w-full ${marqueeBarStyle} overflow-x-hidden overflow-y-clip`}>
      <ul className={`flex items-center justify-center w-max ${marqueeTextStyle} animate-infinite-scrol`}>
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