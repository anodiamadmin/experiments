import './App.css'
import {Greet} from "../src/components/Greet"
import {Person} from "../src/components/Person"
import {PersonList} from "../src/components/PersonList"
import {Status} from "../src/components/Status"

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
    </div>
  )
}

export default App