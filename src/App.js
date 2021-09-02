import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Tarjetas from '../src/components/Tarjetas/Tarjetas';
import Header from '../src/components/Header/Header';


function App() {
  return(
    <body>

      <Header />

      <section className="card-container">

        <Tarjetas />

      </section >

      <Footer />

    </body>
  );
}

export default App;
