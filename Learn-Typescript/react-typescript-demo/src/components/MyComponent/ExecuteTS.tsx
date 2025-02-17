import { SimpleTS } from '../MyComponent/SimpleTS'
import { DisplayEmployeeList } from './DisplayEmployeeList';
import {ManagerDetails} from './ManagerDetails'

const ExecuteTS = () => {
  const managerDetail={
    managerId:1,
    managerName:{
      firstName:"Sachin",
      middleName:"Ramesh",
      lastName:"Tendulkar"
    },
    managerDept: ""
  }

  const employeesDetail= [
    {
      employeeId: 1,
      employeerName: {
        firstName: "Soubhonik",
        middleName: "Kumar",
        lastName: "Roy"
      },
      employeeAddress:"Garia" as const
    },
    {
      employeeId: 2,
      employeerName: {
        firstName: "Sayan",
        // middleName is optional so it can be omitted
        lastName: "Chatterjee"
      },
      employeeAddress:"Australia" as const
    },
    // Add more employee objects as needed
  ];

  return (
    <div>
      <SimpleTS>
          <h1>Welcome to Anodiam </h1>
      </SimpleTS>
      <ManagerDetails managerId={managerDetail.managerId} managerName={managerDetail.managerName} managerDept="Accounts"  />
      <DisplayEmployeeList employees={employeesDetail}/>
    </div>
  )
}

export default ExecuteTS