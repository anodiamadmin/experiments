import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }
  return (
    <div className="App">
      <Greet name='Anodiam' messageCount={12} isLoggedIn={true}/>
      <Person name={personName}/>
    </div>
  );
}

export default App;
