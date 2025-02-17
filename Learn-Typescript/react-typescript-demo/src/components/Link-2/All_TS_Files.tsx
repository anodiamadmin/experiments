import '../../App.css'
import {Greet} from "./Greet"
import {Person} from "./Person"
import {PersonList} from "./PersonList"
import {Status} from "./Status"
import { Heading } from './Heading'
import { Oscar } from './Oscar'
import { OptionalGreet } from './OptionalGreet'
import { Button } from './Button'
import UserDetails from './UserDetails'
import { ListOfPersons } from './ListOfPersons'
import { LoggedIn } from './LoggedIn'
import { User } from './User'
import { SignedInUser } from './SignedInUser'
import { Box } from './context/Box'
import { ThemeContextProvider } from './context/ThemeContext'
import ReactWrapper from './ReactWrapper'
import { Private } from './auth/Private'
import { Profile } from './auth/Profile'
import { GenericList } from './generics/GenericList'
import { RandomNumber } from './restriction/RandomNumber'
import { Toast } from './templateliterals/Toast'
import { CustomButton } from './html/CustomButton'
import { CustomInput } from './html/CustomInput'
import { CustomComponent } from './CustomComponent'
import { PolyText } from './polymorphic/PolyText'
import { DomRef } from './DomRef'
import Reducer from './Reducer'

function All_TS_Files() {
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

export default All_TS_Files