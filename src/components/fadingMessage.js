import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'


const animationControl = {
  showAnimation : true, // always start showing animation
  animationCounter : 0,  // a flag to control how many times the animation was showed
  fadeDuration: 0.5,
}

const fadeInAnimation = keyframes`
  0% { opacity: 0; 
       margin-left: 100px; }
  100% { opacity: 1; 
        margin-right: 0px; }
`

const fadeOutAnimation = keyframes`
  0% { opacity: 1;  }
  100% { opacity: 0; }
`

const AnimatedDiv = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
  opacity: 0;
  animation: ${ props => props.showit ? props.animation : fadeOutAnimation } 1s ease forwards;
`

export default class FadingMessage extends Component {

  constructor (props){
     
      super(props)     
      this.state = {
          showComponent: true,
          duration: this.props.duration ? this.props.duration : 5000, 
      }
  }  

  timer = () => setTimeout (()=>{
    animationControl.showAnimation = false // in the next setState will fadeOut the component
    animationControl.animationCounter = 0 // reset the counter, so the render do not call timer recursively
    this.setState ({
      showComponent: true //  just call render
    })
  },this.state.duration)

  componentDidMount(props) {
    this.timer() // call timer first time component shows
  }

  componentDidUpdate (props) {
    animationControl.showAnimation = true 
    animationControl.animationCounter ++
  }

  render() {
  
  if (animationControl.animationCounter > 0) { // its not the first time showing 
      animationControl.showAnimation = true // then, turns animation to true, call timer
      this.timer()
  }

  return (
      <React.Fragment>
          <AnimatedDiv 
              showit={animationControl.showAnimation}
              fadeDuration={animationControl.fadeDuration}
              animation={fadeInAnimation}>
                {this.props.children}
            </AnimatedDiv>
      </React.Fragment>
    )
  }
}
