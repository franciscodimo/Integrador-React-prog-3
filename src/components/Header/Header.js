import React, {Component} from 'react';
import '../Header/header.css';
import '../Artistas/Artistas';


class Header extends Component{
    constructor(){
        super();
        this.state ={
            filterBy:'', //este filterBy va como un array vacio y despues va a ser modificado en la linea 21 y 22 cuando el usuario le mande datos al imput
            }
        }

    evitarSubmit(e){
        e.preventDefault();
        console.log('Evitando el envío')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value //este value de aca referencia al value del campo imput en la linea 36
        }, () => this.props.filtrarArtistas(this.state.filterBy)) //ale en la clase mostro como con un console log dentro del setState se qudaba un paso atras en la ejecucion del texto // this.state despues de llamar a set state puede devolver un valor inexacto. react nos permite poner despues del objt literal un callback que nos garantiza la ejecucion una vez que la actualizacion de estado se haya completado
               
    }                                                             //this.state.filterBy va a ser el que tiene la info a ejecutarse

    render(){  
        return( 
            <section>
                <img src='../assets/img/eMusic.png' alt=""/>
                {this.props.flechas ?
                 <p className="ordenar" onClick = {()=>this.props.ordenarTarjetas()}>Ordenar asc</p> 
                 :<p className="ordenar" onClick = {()=>this.props.ordenarTarjetas()}>Ordenar desc</p>}
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
// este form (linea 35) es igual al que veniamos haciendo pero con la particularidad de que en este le debemos pasar como parametro el evento(submit)
//en la linea 36, definimos el evento "onChange" para que el estado del componente se actualize automaticamente cuando usuario cambia o agrega algun caracter y se guarda en value que es el que modifca el estado event.target.value en la linea 21