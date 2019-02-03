import React from 'react'
import MovieCase from './moviecase'
import CustomButton from './customButton';

const HomeMovieSection = () => (
    <React.Fragment>
    <div className="container homeMovieSection">
        <div className="row justify-content-center">
            <h1>Cases de Sucesso</h1>
        </div>     
        <MovieCase title="Pizza Hut Brasil Sliders" 
                    text ="A Pizza Hut apresenta campanha publicitária para anunciar seu lançamento exclusivo, os Sliders. O produto, grande aposta da rede para 2014, são pizzas individuais com a famosa e tradicional massa Pan em um tamanho de 9,5 cm de diâmetro e 70 gramas." 
                    date ="07/Jan/2014"
                    tags = {["interna","publicidade","proloc"]}
                    imagesArr = {[
                        "https://www.dropbox.com/s/d68wsigrcyg670w/proloc%20gallery%204.jpg?dl=0",
                        "https://www.dropbox.com/s/muumroyaxdm5kl8/proloc%20gallery%205.jpg?dl=0",
                        "https://www.dropbox.com/s/4ff9d7ecvbxp809/proloc%20gallery%206.jpg?dl=0",
                        "https://www.dropbox.com/s/ppnvr0wzwcwszmz/proloc%20gallery%208.jpg?dl=0"
                    ]}
                    yUrl = "https://www.youtube.com/embed/8kziwuZcARE" 
                    withButton
                />
        <div className="row justify-content-end">
            <CustomButton url="/cases/">Mais Cases</CustomButton> 
        </div>
    </div>

    </React.Fragment>
)

export default HomeMovieSection