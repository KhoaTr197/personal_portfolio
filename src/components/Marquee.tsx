import { MarqueeProps } from "@/types/component"

const Marquee = ({
  items,
  separator = ' ',
  duration = 20,
  direction = 'normal',
  marqueeBarStyle,
  marqueeTextStyle
}: MarqueeProps) => {
  const animationDuration = String(duration) + 's'

  return (
    <div className={`w-full ${marqueeBarStyle} overflow-x-hidden overflow-y-clip`}>
      <ul
        className={`flex items-center justify-center w-max ${marqueeTextStyle} animate-infinite-scroll`}
        style={{
          animationDuration: animationDuration,
          animationDirection: direction
        }}>
        {items.concat(items, items).map((item, index) => (
          <li key={index}>
            {item}
            {index !== (items.length / 3 - 1) && separator}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Marquee