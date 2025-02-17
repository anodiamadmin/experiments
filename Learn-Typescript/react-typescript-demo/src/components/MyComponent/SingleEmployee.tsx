import { EmployeeProps } from "./Employee.types"

export const SingleEmployee=(props:EmployeeProps) =>{
  return (
    <div>
        <h3>Employee Id : {props.id}</h3>
        <h3>First name : {props.name.firstName}</h3>
        <h3>Middle name : {props.name.middleName}</h3>
        <h3>Last name : {props.name.lastName}</h3>
    </div>
  )
}