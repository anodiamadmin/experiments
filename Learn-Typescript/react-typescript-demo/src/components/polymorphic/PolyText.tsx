type PolyTextProps={
    size?:'sm'|'md'|'lg'
    color?:'primary'|'secondary'
    children:React.ReactNode
}
export const PolyText = ({size,color,children}:PolyTextProps) => {
  return (
    <div className={`class-with-${size}-${color}`}>{children}</div>
  )
}