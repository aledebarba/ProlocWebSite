import React, { Component } from 'react';

export default class DropBoxImage extends Component {

    render() { return <img src={this.handleImageURL()} alt=""/> }

  handleImageURL() {
        let dbimg = this.props.src ? this.props.src : "https://picsum.photos/300"
        dbimg = dbimg.replace("https://www.dropbox.com", "https://dl.dropboxusercontent.com");
        dbimg = dbimg.replace("dl=0", "raw=1");
        return (dbimg)
  }
}
