import './App.css';
import Nav from "./Components/Nav/Nav";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Saludo from "./Components/Saludo/Saludo"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Bienvenido a la tienda de Componentes Electronicos Zinsi" />
        
        <Nav /> 
        
       

        <Saludo persona="Cliente" apellido="Apellido"/>
    
      </header>
      
      
    </div>
  );
}


export default App;
