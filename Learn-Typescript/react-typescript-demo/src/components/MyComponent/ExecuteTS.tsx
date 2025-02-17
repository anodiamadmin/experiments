import { SimpleTS } from '../MyComponent/SimpleTS'
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
  return (
    <div>
    <SimpleTS>
        <h1>Welcome to Anodiam </h1>
    </SimpleTS>
    <ManagerDetails managerId={managerDetail.managerId} managerName={managerDetail.managerName} managerDept="Accounts"  />
    </div>
  )
}

export default ExecuteTS