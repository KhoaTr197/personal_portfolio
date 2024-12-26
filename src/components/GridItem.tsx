import { FC, ReactNode } from 'react'

type GridItemProps = {
  size: [number, number], //[x, y]
  coord?: [number, number], //[offsetX, offsetY]
  styles?: string,
  background?: string,
  children: ReactNode
}

const getItemStyles = ({
  size,
  background=''
}: Pick<GridItemProps, "size" | "coord" | "background">) => {
  return {
    gridRowEnd: `span ${size[1]}`,
    gridColumnEnd: `span ${size[0]}`,
    backgroundImage: `url('${background}')`
  };
}

const GridItem:FC<GridItemProps> = ({
  size,
  coord,
  styles,
  background,
  children
}) => {
  const itemStyles = getItemStyles({size, coord, background});  

  return (
    <div className={`overflow-hidden row-auto col-auto ${styles}`} style={itemStyles}>
      {children}
    </div>
  )
}

export default GridItem