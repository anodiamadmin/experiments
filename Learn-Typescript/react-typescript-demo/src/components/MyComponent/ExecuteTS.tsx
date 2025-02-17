import { SimpleTS } from '../MyComponent/SimpleTS'
import {SingleEmployee} from './SingleEmployee'

const ExecuteTS = () => {

  const empDetail={
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
    <SingleEmployee id={empDetail.id} name={empDetail.name}  />
    </div>
  )
}

export default ExecuteTS