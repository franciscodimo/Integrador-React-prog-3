import React,{Component} from 'react'
import Card from '../Card/Card'
import './artistas.css'

class Artistas extends Component{
    constructor(){
        super()
        this.state={
            artistas: [],
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

    render(){
        return(
            <section className="card-container">
                {/* para que imprima la cantidad de información que tenemos en el fetch */}
                {this.state.artistas.map((artista, i) => <Card key={artista.name + i} dataArtistas= {artista}/>)}                    
            </section>
        )
    }
}

export default Artistas