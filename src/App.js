import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Artistas from '../src/components/Artistas/Artistas';
import './style.css'

function App() {
  return(
    <body>
      <br/>
        <Artistas />
      <br/>
      <footer>
        <Footer /> 
      </footer>
    </body>
  );
}

export default App;
