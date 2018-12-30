import React from 'react'
import MovieCase from './case';

const HomeCaseSection = () => (
    <React.Fragment>
    <section className="container-fluid">        
        <div className="row justify-content-center">
            <div className="col col-md-12">
                <h1>Cases</h1>
                <p>Você pode conhecer nosso trabalho através dos cases e clientes atendidos pela Proloc. Vá em frente, saiba mais sobre tudo o que já fizemos.</p>
            </div>
        </div>
        <div className="row justify-content-center">
        <div className="col col-md-12">
            <MovieCase title="Pizza Hut Brasil Sliders" lead="A Pizza Hut apresenta campanha publicitária para anunciar seu lançamento exclusivo, os Sliders. O produto, grande aposta da rede para 2014, são pizzas individuais com a famosa e tradicional massa Pan em um tamanho de 9,5 cm de diâmetro e 70 gramas." url="https://www.youtube.com/embed/8kziwuZcARE" />
        </div>
        </div>
    </section>   
    </React.Fragment>
)

export default HomeCaseSection