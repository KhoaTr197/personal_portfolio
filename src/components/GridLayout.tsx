import { FC, ReactNode } from 'react'

type GridLayoutProps = {
  size: [number, number], //[x, y]
  gap?: number,
  styles: string,
  children: ReactNode
}

const getLayoutStyles = ({
  size,
  gap=0
}: Pick<GridLayoutProps, "size" | "gap">) => {
  return {
    gridTemplateRows: `repeat(${size[1]}, 1fr)`,
    gridTemplateColumns: `repeat(${size[0]}, 1fr)`,
    gap: `${gap}px`,
  };
}

const GridLayout:FC<GridLayoutProps> = ({
  size,
  gap,
  styles,
  children
}) => {
  const layoutStyles = getLayoutStyles({size, gap});

  return (
    <div className={`grid grid-flow-row-dense ${styles}`} style={layoutStyles}>
      {children}
    </div>
  )
}

export default GridLayout