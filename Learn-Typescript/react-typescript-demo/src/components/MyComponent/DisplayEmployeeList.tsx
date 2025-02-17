import { EmployeesListProps } from "./EmployeeList.types";

export const DisplayEmployeeList = (props:EmployeesListProps) => {
  return (
    <div>
      <h2>Employee List</h2>
      {props.employees.map((employee) => (
        <div key={employee.employeeId}>
          <h3>Id: {employee.employeeId}</h3>
          <h3>
            Name: {employee.employeerName.firstName}{" "}
            {employee.employeerName.middleName
              ? employee.employeerName.middleName + " "
              : ""}
            {employee.employeerName.lastName}
          </h3>
          <h3>Address: {employee.employeeAddress}</h3>
          <br/>
        </div>
      ))}
   
    </div>
  )
}