import React, { Component, Children } from 'react'
import styled from 'styled-components'

const AnimatedDiv = styled.div`
  display: inline;
  color: white;
  font-size: 14px;
  opacity: ${ props => props.showit ? 1 : 0 };
  transition: all 1s linear;
`
export default class FadingMessage extends Component {

  constructor (props){
      super(props)     
      this.state = {
          showAlert: true,
          duration: this.props.duration ? this.props.duration : 5000, 
      }
  }  

  timer = () => setTimeout (()=>{
    this.setState({showAlert: false})   
  },this.state.duration)

  // where is the error
  render() {
    this.timer();
    return (
      <React.Fragment>
          { this.state.showAlert 
            ? <AnimatedDiv showit>{this.props.children}</AnimatedDiv>
            : <AnimatedDiv>{this.props.children}</AnimatedDiv>
         }
      </React.Fragment>
    )
  }
}
