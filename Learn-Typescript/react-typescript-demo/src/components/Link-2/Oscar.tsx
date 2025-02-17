/* 
type OscarProps = { ... }

This defines a TypeScript type alias named HeadingProps.
It specifies the structure of the props that a component should accept.
children: React.ReactNode;

children is a property that will hold the content passed between the opening and closing tags of a React component.
React.ReactNode is a TypeScript type that represents anything that can be rendered in React.
It includes:
Strings ("Hello")
Numbers (123)
JSX elements (<span>Text</span>)
Fragments (<>...</>)
Arrays of React nodes
null and undefined
*/
type OscarProps={
  //Children props
  children:React.ReactNode
}
export const Oscar = (props:OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}