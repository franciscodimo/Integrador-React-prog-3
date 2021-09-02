import React from 'react';
import '../Header/header.css'

function Header (){
    return( 
            <section>
                <h1 className="nombreApp">Título/ Nombre de la app</h1>
                <p className="ordenar">Ordenar ASC/ DESC</p>
                <i className="fas fa-align-justify"></i>
                <i className="fas fa-th"></i>
                <form className="buscador" action="">
                    <input type="text" name="search" id="" placeholder="Search" />
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </section>
        
    )
}

export default Header;