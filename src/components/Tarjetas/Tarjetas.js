import React from 'react'
import '../Tarjetas/tarjetas.css'

 function Tarjetas (){
    return(
        <article>
            <section className="navigation">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <i className="far fa-window-close"></i>
            </section>
            <main>
                <img src="/assets/img/image-default.png" alt=""/>
                <h3>Título/ Nombre</h3>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                <section className="aditional-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                </section>
                <a href="/">Ver más</a>
            </main>
        </article>
    )
}

export default Tarjetas;          