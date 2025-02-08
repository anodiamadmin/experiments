type PersonProps =
{
  name:{
    first:string
    last:string
  }
}
export const Person=(props:PersonProps) =>{
  return (
    <div><h2>Hi! {props.name.first} {props.name.last}</h2></div>
  )
}