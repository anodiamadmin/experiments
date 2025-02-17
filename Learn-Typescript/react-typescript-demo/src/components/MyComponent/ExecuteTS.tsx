import { SimpleTS } from '../MyComponent/SimpleTS'
import {ManagerEmployee} from './ManagerEmployee'

const ExecuteTS = () => {

  const managerDetail={
    managerId:1,
    managerName:{
      firstName:"Sachin",
      middleName:"Ramesh",
      lastName:"Tendulkar"
    }
  }
  return (
    <div>
    <SimpleTS>
        <h1>Welcome to Anodiam </h1>
    </SimpleTS>
    <ManagerEmployee managerId={managerDetail.managerId} managerName={managerDetail.managerName}  />
    </div>
  )
}

export default ExecuteTS