import { ManagerProps } from "./Manager.types"

export const ManagerEmployee=(props:ManagerProps) =>{
  return (
    <div>
        <h3>Our Manager Details</h3>
        <h3>Manager Id   : {props.id}</h3>
        <h3>Manager name : {props.name.firstName} {props.name.middleName} {props.name.lastName}</h3>
    </div>
  )
}