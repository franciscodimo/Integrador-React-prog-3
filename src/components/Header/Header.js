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
                <a href="/"><i className="fas fa-align-justify"onClick={()=>this.props.botonRow(this.props.boton)}></i></a>
                <a href="/"><i className="fas fa-th"onClick={()=>this.props.botonRow(this.props.boton)}></i></a>
                <form action="Buscar por Nombre" onSubmit={(milanesa)=>this.evitarSubmit(milanesa)}>
                <input type="text" onChange={(papas)=>this.controlarCambios(papas)} value={this.state.filterBy} placehoder='ingrese su nombre'/>
                </form>
            </section> 
            
        )
    }

}

export default Header;