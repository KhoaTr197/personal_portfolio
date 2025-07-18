import { FeatureListProps } from '@/types/component'

const FeatureList = ({
  title,
  children,
  style = ''
}: FeatureListProps) => {
  return (
    <div className={style}>
      <div className='md:text-3xl xl:text-4xl'>{title}</div>
      <ul className='mt-2 flex flex-wrap gap-x-4 gap-y-8 xl:gap-8'>
        {children}
      </ul>
    </div>
  )
}

export default FeatureList