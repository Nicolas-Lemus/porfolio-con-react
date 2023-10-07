import './App.css';
import { Ceparador } from './components/Ceparador/Ceparador';
import { Informacion } from './components/Informacion/Informacion';
import NavBar from './components/NavBar/NavBar';
import Proyectos from './components/Proyectos/Proyectos';
import Walcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Walcome/>
      <Ceparador/>
      <Informacion/>
      <Ceparador/>
      <Proyectos/>
    </div>
  );
}

export default App;
