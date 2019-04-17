import React, { Component } from 'react'
import LazyHero from 'react-lazy-hero'
import styled from 'styled-components'

const Content = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 25px 25px 50px 50px;
  text-align: center;

   
  & h4 {
    font-size: 4em !important;
    text-align: left;
    padding: 0 !important;
    margin: 0 !important;
  }

  & p {
    font-size: 2em;
    line-height: 1.4em;
    text-align: left;
    padding: 0 !important;
    margin: 0 !important;
    width: 50%;
    @media (max-width: 700px) {
      width: 100%;
    }

  }
`
const heroStyles = {
  boxShadow: '0px 10px 5px rgba(0,0,0,0.2)'
}

export default class Header extends Component {

  render() {
    return (
    <LazyHero 
        imageSrc={this.getTheBackgroundImageUrl()}
        minHeight='75vh'
        opacity='0'
        parallaxOffset='100'
        isFixed='false'
        transitionDuration="300"
        style={heroStyles}>      
      <Content>
        <h4>{this.props.title}</h4>
        {this.props.children}
      </Content>
    </LazyHero>
    )
  }

  getTheBackgroundImage() {
          let url = this.props.Src ? this.props.Src : "https://dl.dropboxusercontent.com/s/09wrpk3qt1050p8/brasil-predio-interior.jpg?raw=1" // passed image or default image

          // normalize dropbox image
          url = url.replace('www.dropbox.com','dl.dropboxusercontent.com')
          url = url.replace('dl=0','raw=1')

          return({backgroundImage: 'url(' + url + ')'}) 
  }

  getTheBackgroundImageUrl() {
    let url = this.props.Src ? this.props.Src : "https://dl.dropboxusercontent.com/s/09wrpk3qt1050p8/brasil-predio-interior.jpg?raw=1" // passed image or default image
    // normalize dropbox image
    url = url.replace('www.dropbox.com','dl.dropboxusercontent.com')
    url = url.replace('dl=0','raw=1')
  return(url) 
}
}
