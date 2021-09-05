import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Artistas from '../src/components/Artistas/Artistas';
import Header from '../src/components/Header/Header';
import './style.css'


function App() {
  return(
    <body>
      <header>
        <Header />
      </header>
      
      <button type="button">Cargar más tarjetas</button>

        <Artistas />
      
      <footer>
        <Footer /> 
      </footer>
    </body>
  );
}

export default App;
