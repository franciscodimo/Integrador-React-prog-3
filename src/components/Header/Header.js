import React from 'react';

function Header (){
    return(
        <header>
            <h1>Título/ Nombre de la app</h1>
            <section>
                <p>Ordenar ASC/ DESC</p>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action="">
                    <input type="text" name="search" id="" placeholder="Search" />
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </section>
        </header>
    )
}
export default Header;