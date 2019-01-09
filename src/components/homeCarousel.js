import React from "react"
import './homeCarousel.css'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import RBCarousel from "react-bootstrap-carousel"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"


export default class HomeCarousel extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      autoplay: true
    }
  }

  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };

  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />
    this.setState({ leftIcon, rightIcon })
  }

  render() {
    let { leftIcon, rightIcon } = this.state


    return (
      <React.Fragment>
        <div id="homeCarouselPosition" className="container-fluid homeCarousel">
          <div className="row justify-content-center">
            <div className="col col-md-10">

              <h1>Catálogo irretocável</h1>

              <p>Acervo de locações amplo e flexível. Nossas opções certamente se encaixam em suas necessidade. Veja algumas de nossas locações abaixo, visite uma amostra de nosso catálogo clicando no próximo botão.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <RBCarousel
                animation={true}
                autoplay={this.state.autoplay}
                slideshowSpeed={4000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r => (this.slider = r)}
                version={4}
              >
                <CarouselItem title="Casas"
                  lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  imgURL="/casas/casa1.webp" />
                <CarouselItem title="Casas"
                  lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  imgURL="/casas/casa2.webp" />
                <CarouselItem title="Estradas"
                  lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  imgURL="/estradas/estrada1.webp" />
                <CarouselItem title="Estradas"
                  lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  imgURL="/estradas/estrada2.webp" />
                <CarouselItem title="Cidades"
                  lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  imgURL="/cidade/cidade1.webp" />
                <CarouselItem title="Cidades"
                  lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  imgURL="/cidade/cidade2.webp" />
                <CarouselItem title="Outros"
                  lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  imgURL="/outros/outros1.webp" />
                <CarouselItem title="Outros"
                  lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  imgURL="/outros/outros2.webp" />
              </RBCarousel>
            </div>
          </div>
        </div>
      </React.Fragment>
    ) // return
  } // render
} // component

const CarouselItem = (props) => {

  var imagem = require('../images' + props.imgURL)

  return (
    <div className="homeCarouselItem">
      <img src={imagem} alt="" />
      <div className="carousel-caption d-none d-md-block">
        <h1>{props.title}</h1>
        <div className="row justify-content-center">
          <p className="col col-md-6">{props.lead}</p>
        </div>
        <Link to="/catalogo/" className="styled-button-1">Conheça nosso catálogo <FaAngleRight /></Link>
      </div>
    </div>
  )
}