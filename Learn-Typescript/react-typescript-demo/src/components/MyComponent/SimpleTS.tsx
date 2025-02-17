/* 
type SimpleProps = { ... }

In TypeScript, type is used to create type aliases. 
A type alias is a way to define a custom name for a specific type or structure. 
This helps in making code more readable and reusable.

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
type SimpleProps={
    //Children props
    children:React.ReactNode
  }
  export const SimpleTS = (props:SimpleProps) => {
    return (
      <div>{props.children}</div>
    )
  }