type PolyTextOwnProps<E extends React.ElementType>={
    size?:'sm'|'md'|'lg'
    color?:'primary'|'secondary'
    children:React.ReactNode
    as?:E
}
type PolyTextProps<E extends React.ElementType>=PolyTextOwnProps<E> &
    Omit<React.ComponentProps<E>,keyof PolyTextOwnProps<E>>

export const PolyText = <E extends React.ElementType='div'>({size,color,children,as}:PolyTextProps<E>) => {
  const Component =as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}