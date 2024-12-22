import { FC } from 'react'

type XIconType = {
  size?: number,
  style?: string
}

const XIcon:FC<XIconType> = ({
  size,
  style
}) => {
  const config = {
    size: size || 32,
    style: style
  }
  
  return (
    <svg className={config.style} width={config.size} height={config.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_269_1542" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <path d="M0 0H32V32H0V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_269_1542)">
        <path d="M25.2 1.49939H30.1074L19.3874 13.7828L32 30.5005H22.1257L14.3863 20.3634L5.54057 30.5005H0.628571L12.0937 17.3577L0 1.50168H10.1257L17.1109 10.7657L25.2 1.49939ZM23.4743 27.5565H26.1943L8.64 4.29025H5.72343L23.4743 27.5565Z" fill="#FFFFEE"/>
      </g>
    </svg>
  )
}

export default XIcon