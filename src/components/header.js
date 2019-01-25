import React, { Component } from 'react'
import '../components/styles.css'
/*
sintax
<Header 
  title="Lorem impsun doren sit amet."
  Src="http://source.file.com/imagename.jpg" >
  <p>Some other elements</p>
</Header>
*/

export default class Header extends Component {

  render() {
    return (
      <div className="container-fluid siteHeader justify-content-center" style={this.getTheBackgroundImage()}>
        <div className="row">
          <div className="col-xs-12 col-sm-6"><h1>{this.props.title}</h1>
            {this.props.children}</div>
        </div>
      </div>
    )
  }

  getTheBackgroundImage() {
          let url = this.props.Src ? this.props.Src : "https://dl.dropboxusercontent.com/s/09wrpk3qt1050p8/brasil-predio-interior.jpg?raw=1" // passed image or default image

          // normalize dropbox image
          url = url.replace('www.dropbox.com','dl.dropboxusercontent.com')
          url = url.replace('dl=0','raw=1')

          return({backgroundImage: 'url(' + url + ')'}) 
  }
}
