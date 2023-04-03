import logo from './logo.svg';
import './App.css';
// Importacion de componentes creados
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuarios from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';

function App() {
  return (
    <div className="App">
      <h1>Aplicacion de contactos MERN</h1>
      <ListaUsuarios />
      <AgregarUsuarios />
      <EditarUsuario />
    </div>
  );
}

export default App;
