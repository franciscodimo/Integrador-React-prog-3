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
         artistasIniciales:[],
         isLoaded: false
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
                    artistasIniciales: data.data,
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
        let artistasQueQuedan = this.state.artistasIniciales.filter( artista => artista.id !== artistasABorrar );

        this.setState({
            artistas: artistasQueQuedan,
            artistasIniciales: artistasQueQuedan
        })
    }
    
    filtrarArtistas(text){
        let artistasFiltrados = this.state.artistasIniciales.filter( artista => artista.name.toLowerCase().includes(text.toLowerCase()));
        this.setState({
            artistas: artistasFiltrados  
        })
       
    }

    render(){
        return(
            <React.Fragment>
                <div className="row header">
                    <Header filtrarArtistas={(text)=>this.filtrarArtistas(text)} botonRow={(botonRow) => this.botonRow(botonRow)}  boton={this.state.botonRow}/>
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
