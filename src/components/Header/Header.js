import React, {Component} from 'react';
import '../Header/header.css';
import '../Artistas/Artistas';


class Header extends Component{
    constructor(){
        super();
        this.state ={
            filterBy:'',
            botonRow: false,
             }
        }
    evitarSubmit(e){
        e.preventDefault();
        console.log('Evitando el envío')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, () => this.props.filtrarArtistas(this.state.filterBy))
        
    }

    render(){
          
        return(
            
            <section>
                <h1 className="nombreApp">Título/ Nombre de la app</h1>
                <p className="ordenar">Ordenar ASC/ DESC</p>
                <i className="fas fa-align-justify"></i>
                <i className="fas fa-th"></i>
                <form action="Buscar por Nombre" onSubmit={(milanesa)=>this.evitarSubmit(milanesa)}>
                <input type="text" onChange={(papas)=>this.controlarCambios(papas)} value={this.state.filterBy} placehoder='ingrese su nombre'/>
                </form>
            </section>
            
        )
        
    }

}

export default Header;