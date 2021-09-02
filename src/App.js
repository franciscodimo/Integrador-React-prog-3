import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Tarjetas from '../src/components/Tarjetas/Tarjetas';
import Header from '../src/components/Header/Header';
import './style.css'


function App() {
  return(
    <body>
      <header>
        <Header />
      </header>
      
      <button type="button">Cargar más tarjetas</button>

      <section className="card-container">

        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />
        <Tarjetas />

      </section >
      <footer>
        <Footer /> 
      </footer>
    </body>
  );
}

export default App;
