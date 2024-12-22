import { FC, ReactNode } from 'react'

type FeatureListProps = {
  title: string,
  items?: string[],
  children?: ReactNode,
  style?: string
}

const FeatureList:FC<FeatureListProps> = ({
  title,
  items,
  children,
  style=''
}) => {
  return (
    <div className={style}>
      <div className='text-4xl'>{title}</div>
      <ul className='mt-2 flex flex-wrap gap-8 '>
        {children}
      </ul>
    </div>
  )
}

export default FeatureList