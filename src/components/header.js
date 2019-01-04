import React, { Component } from 'react'
import '../components/styles.css'

export default class Header extends Component {

  render() {
    return (
      <div className="container-fluid siteHeader" style={this.getTheBackgroundImage()}>
        <div class="row justify-content-center">
          <div class="col-xs-12 col-sm-4"><h1>{this.props.title}</h1>
            {this.props.children}</div>
          <div class="col-8"></div>
        </div>
      </div>
    )
  }

  getTheBackgroundImage() {
    return {
      backgroundImage: this.props.scr ? `url(${this.props.scr})` : 'url(https://dl.dropboxusercontent.com/s/09wrpk3qt1050p8/brasil-predio-interior.jpg?raw=1)'
    };
  }
}
