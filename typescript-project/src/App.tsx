import './App.css';
import Greet from './components/Greet';
// import { Oscar } from './components/Oscar';
// import { Heading } from './components/Heading';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

function App() {
  // const personName = {
  //   first: 'James',
  //   last: 'Bond'
  // }
  // const nameList = [
  //   {
  //     first: 'Timothy',
  //     last: 'Dalton',
  //   },
  //   {
  //     first: 'Pierce',
  //     last: 'Brosnan',
  //   },
  //   {
  //     first: 'Sean',
  //     last: 'Connery',
  //   }
  // ]
  return (
    <div className="App">
      <Greet name='Anodiam' isLoggedIn={true} />
      {/* <Oscar>
        <Heading>Kate Winslet!</Heading>
      </Oscar>
      <Heading>This text goes in as Child Prop to heading component!</Heading>
      <Greet name='Anodiam' isLoggedIn={true} messageCount={20}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status={'loading'}/> */}
    </div>
  );
}

export default App;
