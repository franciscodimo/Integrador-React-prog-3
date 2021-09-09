import React,{Component} from 'react'
import Card from '../Card/Card'
import './artistas.css'
import Header from '../Header/Header';

class Artistas extends Component{
    constructor(){
        super()
        this.state={
         artistas: [],
         proximaUrl: '',
         artistasIniciales:[],
        }
    }

    componentDidMount(){
        let url = 'https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/explorer?url=chart/0/artists';

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({     //setState para que se actualicen los artistas
                    artistas:  data.data,
                    artistasIniciales: data.data,
                })   
            })
            .catch(error => console.log(error))
    }

    addMore(){
        let proximaUrl = 'https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/explorer?url=chart/0/artists';

        fetch(proximaUrl)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    artistas: this.state.artistas.concat(data.data),
                    proximaUrl:data.data,
                })
            })
            .catch( error => console.log(error))
    }

    deleteCard(artistasABorrar){
        let artistasQueQuedan = this.state.artistas.filter( artista => artista.id !== artistasABorrar );

        this.setState({
            artistas: artistasQueQuedan
        })
    }
    
    filtrarArtistas(text){
        let artistasFiltrados = this.state.artistasIniciales.filter( artista => artista.name.toLowerCase().includes(text.toLowerCase()));
    
       if (artistasFiltrados === null){
        window.alert("No se encontraron resultados de busqueda");
       }
       
       else{
        this.setState({
            artistas: artistasFiltrados  })
       }
    }

    render(){
        return(
            <React.Fragment>
                  <div className="row card-container">
                    <Header filtrarArtistas={(text)=>this.filtrarArtistas(text)}/>
                    </div>
                    <div className="row card-container"></div>
            <h3 className="momento">Los Artistas del momento!</h3>
            <button className="masArtistas" onClick={()=>this.addMore(this.state.artistas)}>Más artistas</button>
            <section className="card-container">
                {/* para que imprima la cantidad de información que tenemos en el fetch */}
                {this.state.artistas.map((artista, i) => <Card key={artista.name + i} dataArtistas= {artista} remove={(artistasABorrar)=>this.deleteCard(artistasABorrar)}/>)}                    
              
            </section>
            </React.Fragment>
        )
    }
}

export default Artistas
