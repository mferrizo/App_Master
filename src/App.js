import {Routes, Route} from  "react-router-dom";
import './App.css';
import Title from "./Components/Title/Title";
//import ItemList from './Components/ItemList/ItemList';
import Layout from "./Components/Layout/Layout";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Home from "./Pages/Home";
import AboutUs from "./Pages/nosotros";
import Contact from "./Pages/contacto";
//import NotFound from "./Pages/NotFound";
//import Users from "./Components/Users/Users";


function App() {
  return (
    <div className="App bg-black alert alert-info white-link">
     
      <Title greeting="Bienvenidos a APB Computacion" />
      
        <Layout />

        <Routes>
           <Route path="/home" element={ <Home />} />      
           <Route path='/nosotros' element={ <AboutUs   />}/>
           <Route path='/contacto' element={ <Contact />}/>     
           <Route path='/' element={ <ItemListContainer  />}/>
           <Route path='/categoria/:categoriaId' element={ <ItemListContainer  />}/>
           <Route path='/item/:itemId' element={ <ItemDetailContainer  />}/>
        </Routes>
    </div>
  );
}


export default App;
