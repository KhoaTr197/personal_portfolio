import { FC } from 'react'

type MailIconType = {
  size?: number,
  style?: string
}

const MailIcon:FC<MailIconType> = ({
  size=32,
  style
}) => {
  return (
    <svg className={style} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
      <path d="M5.33335 26.6666C4.60002 26.6666 3.97246 26.4058 3.45069 25.884C2.92891 25.3622 2.66758 24.7342 2.66669 24V7.99998C2.66669 7.26665 2.92802 6.63909 3.45069 6.11731C3.97335 5.59553 4.60091 5.3342 5.33335 5.33331H26.6667C27.4 5.33331 28.028 5.59465 28.5507 6.11731C29.0734 6.63998 29.3342 7.26754 29.3334 7.99998V24C29.3334 24.7333 29.0725 25.3613 28.5507 25.884C28.0289 26.4066 27.4009 26.6675 26.6667 26.6666H5.33335ZM16 17.3333L26.6667 10.6666V7.99998L16 14.6666L5.33335 7.99998V10.6666L16 17.3333Z" fill="#FFFFEE"/>
    </svg>
  )
}

export default MailIcon