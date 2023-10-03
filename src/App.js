import './App.css';
import { Informacion } from './components/Informacion/Informacion';
import NavBar from './components/NavBar/NavBar';
import Walcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Walcome/>
      <Informacion/>
    </div>
  );
}

export default App;
