import React,{Component} from 'react'
import Card from '../Card/Card'
import './artistas.css'

class Artistas extends Component{
    constructor(){
        super()
        this.state={
         artistas: [],
         nextUrl: ''
        }
    }

    componentDidMount(){
        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists&top?limit=10';

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({     //setState para que se actualicen los artistas
                    artistas:  data.data,
                })   
            })
            .catch(error => console.log(error))
    }

    addMore(){
        let url = this.state.nextUrl;

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    artistas: this.state.artistas.concat(data.data),
                    nextUrl:data.info.next
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

    render(){
        return(
            <React.Fragment>
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
