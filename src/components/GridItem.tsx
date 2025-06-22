import { GridItemProps } from '@/types/component';

const getItemStyles = ({
  size,
  background = ''
}: Pick<GridItemProps, "size" | "coord" | "background">) => {
  return {
    gridRowEnd: `span ${size[1]}`,
    gridColumnEnd: `span ${size[0]}`,
    backgroundImage: `url('${background}')`
  };
}

const GridItem = ({
  size,
  coord,
  styles,
  background,
  children
}: GridItemProps) => {
  const itemStyles = getItemStyles({ size, coord, background });

  return (
    <div className={`overflow-hidden row-auto col-auto ${styles}`} style={itemStyles}>
      {children}
    </div>
  )
}

export default GridItem