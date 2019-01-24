import React, { Component } from 'react'
import '../components/styles.css'
/*
sintax
<Header 
  title="Lorem impsun doren sit amet."
  src="http://source.file.com/imagename.jpg" >
  <p>Some other elements</p>
</Header>
*/

export default class Header extends Component {

  render() {
    return (
      <div className="container-fluid siteHeader" style={this.getTheBackgroundImage()}>
        <div className="row">
          <div className="col-xs-12 col-sm-6"><h1>{this.props.title}</h1>
            {this.props.children}</div>
        </div>
      </div>
    )
  }

  getTheBackgroundImage() {
          let hStyle = {backgroundImage:'url(https://dl.dropboxusercontent.com/s/09wrpk3qt1050p8/brasil-predio-interior.jpg?raw=1'}
          if (this.props.Src) hStyle = {backgroundImage:'url(' + this.props.Src + ')'}
          return(hStyle) 
  }
}
