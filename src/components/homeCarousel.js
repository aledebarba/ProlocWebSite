import React from "react";
import './homeCarousel.css'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";


const styles = { height: '400px', width: "100%" }

export default class HomeCarousel extends React.PureComponent {
  constructor (props) {
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
    
  render () {
      let { leftIcon, rightIcon } = this.state
      
      return (
        <React.Fragment>
        <div className="homeCarousel">
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
              <div className="homeCarouselItem"> 
                  <img className="homeCarouselImage" src="https://www.w3schools.com/bootstrap/ny.jpg" />
                  <div className="carousel-caption">Image</div>
              </div> 
            </RBCarousel>
            </div> 
            </React.Fragment>
      ) // return
    } // render
  } // component