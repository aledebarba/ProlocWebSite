import React from 'react'
import MovieCase from './case'
import './homeMovieSection.css'

const HomeMovieSection = () => (
    <React.Fragment>
    <div className="container homeMovieSection">
        <div className="row justify-cotent-center">
            <div className="col">
                <h1>Conheça alguns dos nossos cases</h1>
                <p>Entenda como seu argumento, roteiro ou projeto se integra à sua produção.</p>
            </div>
        </div>     
        <div className="row justify-content-center">
        <div className="col col-md-12">
            <MovieCase title="Pizza Hut Brasil Sliders" lead="A Pizza Hut apresenta campanha publicitária para anunciar seu lançamento exclusivo, os Sliders. O produto, grande aposta da rede para 2014, são pizzas individuais com a famosa e tradicional massa Pan em um tamanho de 9,5 cm de diâmetro e 70 gramas." url="https://www.youtube.com/embed/8kziwuZcARE" withButton/>
        </div>
        </div>
    </div>   
    </React.Fragment>
)

export default HomeMovieSection