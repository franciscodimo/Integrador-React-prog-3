import React,{Component} from 'react'
import './card.css'


class Card extends Component{
    constructor(props){
        super(props)
        this.state={
            text:'ver más',
            verMas: false,
        }
    }
    
    verMas(){
        if(this.state.verMas){
            this.setState({
                text:'ver más',
                verMas: false,
            })
        }else{
            this.setState({
                text: 'ver menos',
                verMas: true,
            })
        }
    }
    render(){
        return(
            <article>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="far fa-window-close" onClick={()=>this.props.remove(this.props.dataArtistas.id)} ></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    
                </section>
                <main>
                    <img src={this.props.dataArtistas.picture} alt=""/>
                    <h3>{this.props.dataArtistas.name}</h3>
                    <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section className={`additional-info ${this.state.verMas ? 'show' : 'hide'}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <button className="verMas" onClick={()=>this.verMas()}>{this.state.text}</button>

                </main>
            </article>
    )}
        }

  export default Card;          