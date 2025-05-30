import { ManagerProps } from "./Manager.types"

export const ManagerDetails=(props:ManagerProps) =>{
  return (
    <div>
        <h3>Our Manager Details</h3>
        <h3>Manager Id   : {props.managerId}</h3>
        <h3>Manager name : {props.managerName.firstName}{" "}
                           {props.managerName.middleName ? props.managerName.middleName + " " : ""}  
                           {props.managerName.lastName}</h3>
        <h3>Manager department : {props.managerDept}</h3>
    </div>
  )
}