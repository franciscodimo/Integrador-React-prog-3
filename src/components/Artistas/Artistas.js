import React,{Component} from 'react'
import Card from '../Card/Card'
import './artistas.css'
import Header from '../Header/Header';

class Artistas extends Component{
    constructor(){
        super()
        this.state={
         artistas: [],
         proximaUrl: 11,
         artistasIniciales:[], //este artistas iniciales lo usamos porque cuando nosotros filtramos, si no tenemos el listado con los artistas iniciales, el componente padre se va a quedar solo con los elementos filtrados
         isLoaded: false,  //cuando se renderiza, al principio no hay ningún dato
         ordenarTarjetas: false,
        }
    }

    componentDidMount(){
        let url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?index=1&limit=10";

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    artistas:  data.data,
                    artistasIniciales: data.data, //entonces para poder hacer lo de la linea 12 hay que decirle a la api que valor va a tener el array artistasIniciales (que va a ser todo el array que trae la api)
                    isLoaded: true
                })   
            })
            .catch(error => console.log(error))
    }

    addMore(){
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?index=${this.state.proximaUrl}&limit=10`;

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    artistas: this.state.artistas.concat(data.data),
                    artistasIniciales: this.state.artistasIniciales.concat(data.data),
                    proximaUrl: this.state.proximaUrl + 10,
                })
            })
            .catch( error => console.log(error))
    }
   
    botonRow(botonRow){
        console.log("funciona")
        if(botonRow){
            this.setState({
                botonRow: false,

            })
        }else{
            this.setState({
                botonRow: true,
            })
        }
    }

    deleteCard(artistasABorrar){
        let artistasQueQuedan = this.state.artistasIniciales.filter( artista => artista.id !== artistasABorrar ); //filtro artistasIniciales porque es el array que se va a "pisar con el filtrado"

        this.setState({
            artistas: artistasQueQuedan, //aca actualizo personajes, para que de esa forma pueda ir de atras para adelante y viceversa
            artistasIniciales: artistasQueQuedan //en este caso lo que hacemos es actualizar el array artistasIniciales con artistasQueQuedan porque cuando borramos un artista nos 
        })
    }
    
    filtrarArtistas(text){
        let artistasFiltrados = this.state.artistasIniciales.filter( artista => artista.name.toLowerCase().includes(text.toLowerCase())); //personajes.name es la card //variable donde tengo solo los personajes que yo quiero //el metodo includes nos va a devolver un dato de tipo booleano (entonces si en el texto que yo filtro aparece algun artista, el includes me debe devolver un true si, no esta un false) y le ponemos un toLowercase para que los datos nos los traiga todo en minuscula osea para homogenizar el formato de la info
        this.setState({
            artistas: artistasFiltrados  
        })
       
    }
    
    ordenarTarjetas(){
       let ordenarArtistas = this.state.artistas;
        if(this.state.ordenarTarjetas){
            let or = []
          let ordenAsc = ordenarArtistas.map((artista)=>(artista.name ))
           ordenAsc.sort()
           ordenAsc.map( (orden)=>(
            or = or.concat(this.state.artistas.filter( artista => artista.name.includes(orden)))
           ))
           console.log(or)
           this.setState({
            artistas:or,
            ordenarTarjetas:false,
           })
        }
        else{
            let or = []
          let ordenAsc = ordenarArtistas.map((artista)=>(artista.name ))
           ordenAsc.sort()
           ordenAsc.reverse()
           ordenAsc.map( (orden)=>(
            or = or.concat(this.state.artistas.filter( artista => artista.name.includes(orden)))
           ))
           console.log(or)
           this.setState({
            artistas:or,
            ordenarTarjetas:true,
           })
        }
     }
     //en la linea 95 lo que hacemos con el filtrarArtistas es pasar la funcion como prop para poder usarlo en el componente "hijo" que en este caso seria el header

    render(){
        return(
            <React.Fragment>
                <div className="row header">
                    <Header filtrarArtistas={(text)=>this.filtrarArtistas(text)} botonRow={(botonRow) => this.botonRow(botonRow)}  boton={this.state.botonRow} ordenarTarjetas={() => this.ordenarTarjetas()}  flechas={this.state.ordenarTarjetas}/>
                </div>

                <div className="row card-container">
                    <h2 className="momento">Tus artistas favoritos </h2>
                    <button className="masArtistas" onClick={()=>this.addMore(this.state.artistas)}>Más artistas</button>

                    <section className={this.state.botonRow ? 'flex' : "card-container"} >
                    {
                        this.state.isLoaded === false ? 
                        
                        <h2>Cargando artistas...</h2> :
                        
                        this.state.artistas.map((artista, i) => <Card key={artista.name + i} dataArtistas= {artista} remove={(artistasABorrar)=>this.deleteCard(artistasABorrar)}/>)
                    }
                    </section>

                    {
                        this.state.artistas.length === 0 ?
                        <p className="noEncuentra">No se encontraron resultados de busqueda. Intenta otro nombre!</p>:
                        ''

                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Artistas
