import { FC } from 'react'

type RedditIconType = {
  size?: number,
  style?: string
}

const RedditIcon:FC<RedditIconType> = ({
  size=32,
  style
}) => {
  return (
    <svg className={style} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3333 17.3867C14.3333 16.6267 13.7067 16 12.9467 16C12.1867 16 11.56 16.6267 11.56 17.3867C11.56 17.7544 11.7061 18.1071 11.9661 18.3672C12.2262 18.6272 12.5789 18.7733 12.9467 18.7733C13.3144 18.7733 13.6671 18.6272 13.9272 18.3672C14.1872 18.1071 14.3333 17.7544 14.3333 17.3867ZM18.7867 20.5467C18.1867 21.1467 16.9067 21.36 16 21.36C15.0933 21.36 13.8133 21.1467 13.2133 20.5467C13.1809 20.5119 13.1417 20.4843 13.0981 20.4653C13.0545 20.4464 13.0075 20.4366 12.96 20.4366C12.9125 20.4366 12.8655 20.4464 12.8219 20.4653C12.7783 20.4843 12.7391 20.5119 12.7067 20.5467C12.6719 20.5791 12.6443 20.6183 12.6253 20.6619C12.6064 20.7055 12.5966 20.7525 12.5966 20.8C12.5966 20.8475 12.6064 20.8945 12.6253 20.9381C12.6443 20.9817 12.6719 21.0209 12.7067 21.0533C13.6533 22 15.4667 22.08 16 22.08C16.5333 22.08 18.3467 22 19.2933 21.0533C19.3281 21.0209 19.3557 20.9817 19.3747 20.9381C19.3936 20.8945 19.4034 20.8475 19.4034 20.8C19.4034 20.7525 19.3936 20.7055 19.3747 20.6619C19.3557 20.6183 19.3281 20.5791 19.2933 20.5467C19.16 20.4133 18.9333 20.4133 18.7867 20.5467ZM19.0533 16C18.2933 16 17.6667 16.6267 17.6667 17.3867C17.6667 18.1467 18.2933 18.7733 19.0533 18.7733C19.8133 18.7733 20.44 18.1467 20.44 17.3867C20.44 16.6267 19.8267 16 19.0533 16Z" fill="#FFFFEE"/>
      <path d="M16 2.66669C8.64001 2.66669 2.66667 8.64002 2.66667 16C2.66667 23.36 8.64001 29.3334 16 29.3334C23.36 29.3334 29.3333 23.36 29.3333 16C29.3333 8.64002 23.36 2.66669 16 2.66669ZM23.7333 17.7734C23.76 17.96 23.7733 18.16 23.7733 18.36C23.7733 21.3467 20.2933 23.7734 16 23.7734C11.7067 23.7734 8.22667 21.3467 8.22667 18.36C8.22667 18.16 8.24001 17.96 8.26667 17.7734C7.58667 17.4667 7.12001 16.7867 7.12001 16C7.11803 15.6177 7.22907 15.2433 7.4392 14.9238C7.64932 14.6044 7.94914 14.3542 8.30101 14.2046C8.65288 14.055 9.04111 14.0128 9.41693 14.0831C9.79275 14.1535 10.1394 14.3333 10.4133 14.6C11.76 13.6267 13.6267 13.0134 15.6933 12.9467L16.68 8.29335C16.6933 8.20002 16.7467 8.12002 16.8267 8.08002C16.9067 8.02669 17 8.01335 17.0933 8.02669L20.32 8.72002C20.4294 8.49813 20.5962 8.30955 20.8031 8.17386C21.01 8.03816 21.2494 7.96029 21.4965 7.94832C21.7437 7.93634 21.9895 7.99071 22.2085 8.10577C22.4276 8.22083 22.6118 8.39239 22.7422 8.60267C22.8726 8.81295 22.9443 9.05427 22.95 9.30162C22.9556 9.54897 22.895 9.79333 22.7744 10.0093C22.6538 10.2254 22.4776 10.4052 22.264 10.5302C22.0505 10.6551 21.8074 10.7207 21.56 10.72C20.8133 10.72 20.2133 10.1334 20.1733 9.40002L17.28 8.78669L16.4 12.9467C18.44 13.0134 20.2667 13.64 21.6 14.6C21.8044 14.4048 22.049 14.2567 22.3166 14.1659C22.5843 14.0751 22.8685 14.0439 23.1495 14.0744C23.4304 14.105 23.7013 14.1966 23.9432 14.3427C24.1851 14.4889 24.3921 14.6862 24.5498 14.9207C24.7075 15.1553 24.812 15.4214 24.8561 15.7006C24.9001 15.9798 24.8827 16.2652 24.8049 16.5369C24.7271 16.8086 24.5909 17.06 24.4059 17.2736C24.2208 17.4872 23.9912 17.6578 23.7333 17.7734Z" fill="#FFFFEE"/>
    </svg>
  )
}

export default RedditIcon