import { SimpleTS } from '../MyComponent/SimpleTS'
import {ManagerEmployee} from './ManagerEmployee'

const ExecuteTS = () => {

  const managerDetail={
    id:1,
    name:{
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
    <ManagerEmployee id={managerDetail.id} name={managerDetail.name}  />
    </div>
  )
}

export default ExecuteTS