import { FC } from 'react'

type FacebookIconType = {
  size?: number,
  style?: string
}

const FacebookIcon:FC<FacebookIconType> = ({
  size,
  style
}) => {
  const config = {
    size: size || 32,
    style: style
  }

  return (
    <svg className={config.style} width={config.size} height={config.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.3333 16C29.3333 8.64002 23.36 2.66669 16 2.66669C8.63999 2.66669 2.66666 8.64002 2.66666 16C2.66666 22.4534 7.25332 27.8267 13.3333 29.0667V20H10.6667V16H13.3333V12.6667C13.3333 10.0934 15.4267 8.00002 18 8.00002H21.3333V12H18.6667C17.9333 12 17.3333 12.6 17.3333 13.3334V16H21.3333V20H17.3333V29.2667C24.0667 28.6 29.3333 22.92 29.3333 16Z" fill="#FFFFEE"/>
    </svg>
  )
}

export default FacebookIcon