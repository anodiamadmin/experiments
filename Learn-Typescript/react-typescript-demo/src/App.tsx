import './App.css'
import {Greet} from "./components/Link-2/Greet"
import {Person} from "./components/Link-2/Person"
import {PersonList} from "./components/Link-2/PersonList"
import {Status} from "./components/Link-2/Status"
import { Heading } from './components/Link-2/Heading'
import { Oscar } from './components/Link-2/Oscar'
import { OptionalGreet } from './components/Link-2/OptionalGreet'
import { Button } from './components/Link-2/Button'
import UserDetails from './components/Link-2/UserDetails'
import { ListOfPersons } from './components/Link-2/ListOfPersons'
import { LoggedIn } from './components/Link-2/LoggedIn'
import { User } from './components/Link-2/User'
import { SignedInUser } from './components/Link-2/SignedInUser'
import { Box } from './components/Link-2/context/Box'
import { ThemeContextProvider } from './components/Link-2/context/ThemeContext'
import ReactWrapper from './components/Link-2/ReactWrapper'
import { Private } from './components/Link-2/auth/Private'
import { Profile } from './components/Link-2/auth/Profile'
import { GenericList } from './components/Link-2/generics/GenericList'
import { RandomNumber } from './components/Link-2/restriction/RandomNumber'
import { Toast } from './components/Link-2/templateliterals/Toast'
import { CustomButton } from './components/Link-2/html/CustomButton'
import { CustomInput } from './components/Link-2/html/CustomInput'
import { CustomComponent } from './components/Link-2/CustomComponent'
import { PolyText } from './components/Link-2/polymorphic/PolyText'
import { DomRef } from './components/Link-2/DomRef'
import Reducer from './components/Link-2/Reducer'

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
      {/* UseReducer */}
      <Reducer />
      {/* useContext Hook */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      {/* useRef*/}
      <DomRef />
      {/* children: React.ReactNode */}
      <ReactWrapper />
      {/* Component Prop */}
      <Private isLoggedIn={true} component={Profile} />
      {/* Generics */}
      <GenericList items={['Batman','Superman','Wonder Woman']} onClick={(item)=>alert(item)} />
      <GenericList items={[10,100,1000]} onClick={(item)=>alert(item)} />
      {/*Restricting Props*/}
      <RandomNumber value={50} isZero/>
      {/*Template Literals and Exclude*/}
      <Toast position='center'/>
      {/* Wrapping HTML Elements */}
      <CustomButton variant='Secondary' onClick={()=>alert('Buuton Clicked')}>Custom Button</CustomButton>
      <CustomInput />
      {/* Extracting a Components Prop Types */}
      <CustomComponent name='Custom Component' messageCount={50} isLoggedIn={true}/>
       {/* Polymorphic Components */}
       <PolyText as='h1' size='lg'>Heading</PolyText>
       <PolyText as='p' size='md'>Paragraph</PolyText>
       <PolyText as='label' size='sm' htmlFor='someId' color='primary'>Label</PolyText>
    </div>
  )
}

export default App