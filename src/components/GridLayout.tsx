import { GridLayoutProps } from "@/types/component";

const getLayoutStyles = ({
  size,
  gap = 0
}: Pick<GridLayoutProps, "size" | "gap">) => {
  return {
    gridTemplateRows: `repeat(${size[1]}, 1fr)`,
    gridTemplateColumns: `repeat(${size[0]}, 1fr)`,
    gap: `${gap}px`,
  };
}

const GridLayout = ({
  size,
  gap,
  styles,
  children
}: GridLayoutProps) => {
  const layoutStyles = getLayoutStyles({ size, gap });

  return (
    <div className={`grid grid-flow-row-dense ${styles}`} style={layoutStyles}>
      {children}
    </div>
  )
}

export default GridLayout