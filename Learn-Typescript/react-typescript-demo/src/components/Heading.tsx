/* 
1. This defines a TypeScript type alias called HeadingProps.
    It is used to specify the shape of an object.
    children: string;

2. The children property is expected to be of type string.
    In React, children represents the content inside a component
*/

type HeadingProps={
    children:string
}
export const Heading=(props:HeadingProps) => {
  return (
    <div><h2>{props.children}</h2></div>
  )
}