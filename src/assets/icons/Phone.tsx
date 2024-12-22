import { FC } from 'react'

type PhoneIconType = {
  size?: number,
  style?: string
}

const PhoneIcon:FC<PhoneIconType> = ({
  size,
  style
}) => {
  const config = {
    size: size || 32,
    style: style
  }

  return (
    <svg className={config.style} width={config.size} height={config.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.82667 14.3867C10.7467 18.16 13.84 21.24 17.6133 23.1733L20.5467 20.24C20.9067 19.88 21.44 19.76 21.9067 19.92C23.4 20.4133 25.0133 20.68 26.6667 20.68C27.4 20.68 28 21.28 28 22.0133V26.6667C28 27.4 27.4 28 26.6667 28C14.1467 28 4 17.8533 4 5.33333C4 4.6 4.6 4 5.33333 4H10C10.7333 4 11.3333 4.6 11.3333 5.33333C11.3333 7 11.6 8.6 12.0933 10.0933C12.24 10.56 12.1333 11.08 11.76 11.4533L8.82667 14.3867Z" fill="#FFFFEE"/>
    </svg>
  )
}

export default PhoneIcon