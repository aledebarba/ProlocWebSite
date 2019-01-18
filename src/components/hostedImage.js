import React, { Component } from 'react'

export default class hostedImg extends Component {
constructor(props){
        super(props)
  }
  render() {
    return (
      <React.Fragment>
          <img src={resolveImageURL(this.props.src)} />
      </React.Fragment>
    )
  }

  resolveImgURL(imgSrcUrl) {
      // handles dropbox
      imgSrcUrl = imgSrcUrl.replace("https://www.dropbox.com","https://dl.dropboxusercontent.com")
      imgSrcUrl = imgSrcUrl.replace("dl=0","raw=1")
      // handles google drive -> not implemented
      // handles flicker -> not implemented
      return (imgSrcUrl)      
  }
}
