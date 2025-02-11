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
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import ReactWrapper from './components/ReactWrapper'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { GenericList } from './components/generics/GenericList'

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
      {/* useContext Hook */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      {/* children: React.ReactNode */}
      <ReactWrapper />
      {/* Component Prop */}
      <Private isLoggedIn={true} component={Profile} />
      {/* Lists */}
      <GenericList items={['Batman','Superman','Wonder Woman']} onClick={(item)=>alert(item)} />
      <GenericList items={[10,100,1000]} onClick={(item)=>alert(item)} />
    </div>
  )
}

export default App