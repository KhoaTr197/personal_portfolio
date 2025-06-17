import { CornerInfoProps } from '../@types/component';

const getStyles = ({
  position, 
  textTransform
}: Pick<CornerInfoProps, "position" | "textTransform" >) => {
  const baseStyles = 'w-max absolute';
  const positionStyles = {
    "top-left": `top-4 left-4`,
    "top-right": `top-4 right-4`,
    "bottom-left": `bottom-4 left-4`,
    "bottom-right": `bottom-4 right-4`,
  }
  return `${baseStyles} ${positionStyles[position]} ${textTransform}`;
}

const CornerInfo = ({
  className,
  children,
  position,
  textTransform="lowercase",
}: CornerInfoProps) => {
  console.log(className);
  const styles = getStyles({position, textTransform})
  return (
    <div className={`${className} ${styles}`}>
      {children}
    </div>
  )
}

export default CornerInfo