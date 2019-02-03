import React, { Component } from 'react';
import './homeCarousel.css'
import { Link, Element } from 'react-scroll'
import { FaAngleDown } from  'react-icons/fa'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-weight: normal !important;
  margin: 0;
  padding: 0;
`
const Text = styled.p`
  text-align: center;
  margin:0;
`

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%" height="100%"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="homeCarousel">
      <Element name="Carousel">
        <Title>Especialistas em locações</Title>
      </Element>
      <Text>Nosso catálogo conta com Locações de todo o Brasil. Cenários dos mais diversos, ambientes memorávais e uma base de dados detalhada sobre cada lugar. Nossa equipe é especializada em produção e está aqui para agilizar processos e auxiliar em suas tomadas de decisão. <br/>Vá em frente, conheça mais da Proloc.
        <Link to="CarouselImages" smooth>
          <FaAngleDown />  
        </Link>
        </Text>
      <Element name="CarouselImages" />
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      
      </div>
    );
  }
}


export default HomeCarousel;

const items = [
  {
    src: 'https://dl.dropboxusercontent.com/s/yong5kvqd6bajtj/4f4666_6fa73292fdce51df08ec086728133446.webp?raw=1',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/etkyfoe32sxh1qz/4f4666_88ceece40d0e56a46c9cc3092d882233.webp?raw=1',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/mmglc6yh825jfav/4f4666_99cc808571e959494c560f6692939183.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/0i9q9iwnmege1as/4f4666_773b65148b775210ea337722c95f8819.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/ja5sfmnel00vjys/4f4666_7267a4bce616f3c3c770e72d1cfc9d08%20%281%29.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/jlfynv0n1xuvrwk/4f4666_ce0950aa4e4ddb98c1a7209c2cd4c353.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/x028p5rulsl4xda/cidade2.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/52xs1wywc8k0utt/4f4666_80a1e86574795fa5d3eab31d0f5008da.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/elzfnjqvbhq4aqq/4f4666_04319c702caffbb9b356a1ee0fe1b42d.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/rhszdudzhdbqg1w/4f4666_89734ea0a8e27b9607488234ed97d016.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/07jac42e7eqjs04/4f4666_b29c5b73b314796af349479857c5dd82.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/r8tf8r0uqubm0xg/4f4666_516e7ba3f319eb0d586189494601867f.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/3ek1ppp1y6fd440/4f4666_703c917c5ffa6e9718ae0d318f6e7f9b.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://dl.dropboxusercontent.com/s/3xo5x3lh5zqihh7/4f4666_d7ad518e82121e28c65ca0d32d8b4c3d.webp?raw=1',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
];
