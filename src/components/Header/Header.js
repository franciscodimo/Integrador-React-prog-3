import React, {Component} from 'react';
import '../Header/header.css';
import '../Artistas/Artistas';


class Header extends Component{
    constructor(){
        super();
        this.state ={
            filterBy:'',
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
                <img src='../assets/img/eMusic.png' alt=""/>
                <p className="ordenar">Ordenar ASC/ DESC</p>
                <i className="fas fa-align-justify" onClick={()=>this.props.botonRow(this.props.boton)}></i>
                <i className="fas fa-th" onClick={()=>this.props.botonRow(this.props.boton)}></i>
                <form action="Buscar por Nombre" onSubmit={(submit)=>this.evitarSubmit(submit)}>
                <input type="text" onChange={(filtrado)=>this.controlarCambios(filtrado)} value={this.state.filterBy} placehoder='ingrese su nombre'/>
                </form>
            </section>    
        )
    }
}

export default Header;