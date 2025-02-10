import './App.css'
import {Greet} from "../src/components/Greet"
import {Person} from "../src/components/Person"
import {PersonList} from "../src/components/PersonList"
import {Status} from "../src/components/Status"
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { OptionalGreet } from './components/OptionalGreet'
import { Button } from './components/Button'
import UserDetails from './components/UserDetails'
import { ListOfPersons } from './components/ListOfPersons'
import { LoggedIn } from './components/LoggedIn'
import { User } from './components/User'
import { SignedInUser } from './components/SignedInUser'

function App() {
  const personName={
    first:'Sachin',
    last:'Tendulkar'
  }
  const nameList=[
    {
      first:'Sourav',
      last:'Ganguly'
    },
    {
      first:'Rahul',
      last:'Dravid'
    },
    {
      first:'V.V.S',
      last:'Laxman'
    }
]
  return (
    <div className="App">
      <Greet name='Debashish' messageCount={25} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Lianordo Di Capro!</Heading>
      </Oscar>
      <OptionalGreet name='Sayan'isLoggedIn={true}/>
      <Button handleClick={(event,id)=>console.log('Button Clicked',event,id)}/>
      {/* Interface */}
      <UserDetails />
      {/* Props Types and Tips */}
      <ListOfPersons names={nameList}/>
      {/* useState Hook  */}
      <LoggedIn />
      {/* useState Future Value  */}
      <User />
      {/* useState Type Assertion */}
      <SignedInUser />
    </div>
  )
}

export default App