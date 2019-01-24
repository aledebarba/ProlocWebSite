import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { Mockup as PHOTO_SET } from '../config/galleyImagesMockup'

// scroll-down to end of file for syntax and documentation

export default class HiGallery extends Component {

  constructor(props) {
    super(props)

    let userPhotos = this.props.photoSet ? this.props.photoSet : PHOTO_SET
    let checkboxes, alltags = []

    console.log (this.props.photoSet)
    console.log (userPhotos)

    userPhotos.map(item => item.usertags.split(',').map(tag => {
      let userTag = tag.trim()
      if (alltags.indexOf(userTag) === -1) {alltags.push(userTag)}
      return true
    }))
 
    checkboxes = alltags.map (tag => ({label: tag, value:false}))
        
    this.state = {
      showall: true,
      photoSet: userPhotos,
      tagsCheckBoxes: checkboxes
    }
  }
 
  // ---------------------------------------------------------------------
  handleCheckBoxChanges = (e) => {

    this.setState ({showGallery: false})

    let target = e.target
    let newCheckBoxesState = this.state.tagsCheckBoxes
    let tagsToShow = []
    let showallimages = true
    let userPhotos = this.props.photoSet ? this.props.photoSet : PHOTO_SET
    let photosToShow = []

    newCheckBoxesState.forEach(item => {
      if (item.label === target.name) {
        item.value = !item.value
      }
      if (item.value) {
        showallimages = false
        tagsToShow.push(item.label)
      }
    })

    if (!showallimages) {
      userPhotos.forEach(photo => {
        tagsToShow.forEach(tag => {
          let userTags = photo.usertags
          if (userTags.indexOf(tag) > -1) {
            if (!photosToShow.includes(photo)) {
              photosToShow.push(photo)
            }
          }
        })
      })
    } else { photosToShow = userPhotos }

    this.setState ({
      showall: showallimages,
      showGallery: true,
      tagsCheckBoxes: newCheckBoxesState,
      photoSet: photosToShow
    }
    )
  }

  // handle lightbox ---------------------------------------------------
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {

    let randomNumber = new Date().getTime()
    let randomKey = "gallery-"+randomNumber.toString();

    return (
    <React.Fragment>
      { !this.props.case && 
      <>
        <h4 style={textCenter}>Selecione as categorias que deseja ver</h4>
        <p style={{...textCenter, ...textSmall}}>(nada selecionado mostra todas as categorias)</p>
      </> 
      }
      { !this.props.notags &&
      <>
          <form style={formStyles}>
            {this.state.tagsCheckBoxes.map( (userBtn, index) =>
              <div style={itemStyles} key={index}>
              <input name={userBtn.label}
                type="checkbox"
                checked={userBtn.value}
                onChange={this.handleCheckBoxChanges} />
                <label style={labelStyle}>&nbsp;{userBtn.label}</label>
              </div>)}            
          </form>
      </> }
      <div 
        className={this.props.small ? 'imageGallerySmall' : 'imageGalleryDefault'}
        key={randomKey} >
        
         <Gallery 
          photos={this.state.photoSet} 
          onClick={this.openLightbox} 
          style={{width: 50, height: 50}} /> 
        <Lightbox 
          images={this.state.photoSet}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen} />
      </div>
      </React.Fragment>
  )}
}

// styles

const textCenter = {
  textAlign: "center"
}

const textSmall = {
  fontSize: 8,
}

const labelStyle = {
  marginTop: 0,
  textTransform: "capitalize"
}
const formStyles = {
  color: "white",
  flexWrap: "wrap",
  display: "flex",
  justifyContent: "center",
  fontSize: 12
}

const itemStyles = {
  marginRight: 10,
  marginTop: 15,
  paddingLeft: 5,
  paddingRight: 8,
  paddingTop: 8,
  paddingBottom: 0,
  display: "block",
  backgroundColor: "rgb(230,88,66)",
  borderRadius: 5,
  boxShadow: "5px 5px 5px rgba(0,0,0,0.8)"
}

/* syntax
1. Basic
<HiGallery /> render a default gallery

2. Use with photoSet: array of objects, where each element has:
   src: string (image source url)
   width: number, height: number (proportions of the image 1x1, 2x1, 4x3, etc)
   alt: string (alt atribute)
   usertags: string (tags comma separated)
   googleVisionData: JSON (optional JSON)

    example:
    let photos = [
      {src:"https://via.placeholder.com/300x200", width: 3, height: 2, alt: "placehold image", usertags: "externa, interna, proloc, sala", googleVisionData: JSON},
      {src:"https://via.placeholder.com/200x200", width: 1, height: 1, alt: "placehold image", usertags: "externa, interna, proloc, sala", googleVisionData: JSON},
      {src:"https://via.placeholder.com/200x300", width: 2, height: 3, alt: "placehold image", usertags: "externa, interna, proloc, sala", googleVisionData: JSON}
    ]

    */