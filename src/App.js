import logo from './logo.svg';
import './App.css';

import InicioPagina from './paginas/InicioPagina';
import contactoPagina from './paginas/ContactoPagina';
import ArtistaPagina from './paginas/ArtistaPagina';
import LanzamientosPagina from './paginas/LanzamientosPagina';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from './componentes/menu'
import ContactoPagina from './paginas/ContactoPagina';
 


function App() {
  return (
    
    <>
      <Router>
      <Menu />
      <div className="container pt-5 mt-5">
      
        
          <Routes>
            <Route path="/" element={<InicioPagina />} />
            <Route path="/Contacto" element={<ContactoPagina />} />
            <Route path="/artistas" element={<ArtistaPagina />} />
            <Route path="/lanzamiento" element={<LanzamientosPagina />} />
          </Routes>
        

    
      </div>
      </Router>
    </>
  );
}

export default App;
