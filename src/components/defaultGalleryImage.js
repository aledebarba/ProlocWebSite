import React, { Component } from 'react'

export default class DefaultGalleryImage extends Component 
{
    handleClick = (event, obj) => {
        console.log(event)
        console.log(obj)
        console.log(this.props.imageClick)
    }

  render() {
    const newWidth = this.props.photo.width /2
    const newHeight = this.props.photo.height /2
    const imgStyle = {
        transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s",
        width : newWidth,
        height : newHeight,
      }

    return (
        <img style={imgStyle} {...this.props.photo} onClick={this.handleClick} alt="reference"/>
    )
  }
}



/*
const DefaultGalleryImage = ({
    index,
    onClick,
    photo,
    margin,
    direction,
    top,
    left
  }) */