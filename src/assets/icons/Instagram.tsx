import { FC } from 'react'

type InstagramIconType = {
  size?: number,
  style?: string
}

const InstagramIcon:FC<InstagramIconType> = ({
  size=32,
  style
}) => {
  return (
    <svg className={style} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4 2.66669H21.6C25.8667 2.66669 29.3333 6.13335 29.3333 10.4V21.6C29.3333 23.651 28.5186 25.618 27.0683 27.0683C25.618 28.5186 23.651 29.3334 21.6 29.3334H10.4C6.13332 29.3334 2.66666 25.8667 2.66666 21.6V10.4C2.66666 8.34901 3.48142 6.38201 4.9317 4.93173C6.38198 3.48145 8.34898 2.66669 10.4 2.66669ZM10.1333 5.33335C8.86028 5.33335 7.63939 5.83907 6.73921 6.73924C5.83904 7.63942 5.33332 8.86031 5.33332 10.1334V21.8667C5.33332 24.52 7.47999 26.6667 10.1333 26.6667H21.8667C23.1397 26.6667 24.3606 26.161 25.2608 25.2608C26.1609 24.3606 26.6667 23.1397 26.6667 21.8667V10.1334C26.6667 7.48002 24.52 5.33335 21.8667 5.33335H10.1333ZM23 7.33335C23.442 7.33335 23.8659 7.50895 24.1785 7.82151C24.4911 8.13407 24.6667 8.55799 24.6667 9.00002C24.6667 9.44205 24.4911 9.86597 24.1785 10.1785C23.8659 10.4911 23.442 10.6667 23 10.6667C22.558 10.6667 22.134 10.4911 21.8215 10.1785C21.5089 9.86597 21.3333 9.44205 21.3333 9.00002C21.3333 8.55799 21.5089 8.13407 21.8215 7.82151C22.134 7.50895 22.558 7.33335 23 7.33335ZM16 9.33335C17.7681 9.33335 19.4638 10.0357 20.714 11.286C21.9643 12.5362 22.6667 14.2319 22.6667 16C22.6667 17.7681 21.9643 19.4638 20.714 20.7141C19.4638 21.9643 17.7681 22.6667 16 22.6667C14.2319 22.6667 12.5362 21.9643 11.2859 20.7141C10.0357 19.4638 9.33332 17.7681 9.33332 16C9.33332 14.2319 10.0357 12.5362 11.2859 11.286C12.5362 10.0357 14.2319 9.33335 16 9.33335ZM16 12C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9392 12 16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16C20 14.9392 19.5786 13.9217 18.8284 13.1716C18.0783 12.4214 17.0609 12 16 12Z" fill="#FFFFEE"/>
    </svg>
  )
}

export default InstagramIcon