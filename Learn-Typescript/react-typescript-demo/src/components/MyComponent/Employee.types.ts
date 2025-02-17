export type EmployeeProps =
{
  employeeId:number  
  employeerName:{
    firstName:string
    middleName?:string
    lastName:string
  }
  employeeAddress:"Garia"|"College Street"|"Australia"
}