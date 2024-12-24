import { FC } from 'react'

type XIconType = {
  size?: number,
  style?: string
}

const XIcon:FC<XIconType> = ({
  size=32,
  style
}) => {
  return (
    <svg className={style} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.2 1.49939H30.1074L19.3874 13.7828L32 30.5005H22.1257L14.3863 20.3634L5.54057 30.5005H0.628571L12.0937 17.3577L0 1.50168H10.1257L17.1109 10.7657L25.2 1.49939ZM23.4743 27.5565H26.1943L8.64 4.29025H5.72343L23.4743 27.5565Z" fill="#FFFFEE"/>
    </svg>
  )
}

export default XIcon