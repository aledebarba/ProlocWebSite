import React, { Component } from 'react'

export default class HostedImage extends Component {

  resolveImageURL = (imgSrcUrl) => {
    let myurl = imgSrcUrl.replace("https://www.dropbox.com","https://dl.dropboxusercontent.com");
    myurl = myurl.replace("dl=0","raw=1");
    return (myurl)
  }
  
  render() {
    return (
      <React.Fragment>
          <img src={this.resolveImageURL(this.props.src)} alt={this.props.alt} />
      </React.Fragment>
    )
  }
}


