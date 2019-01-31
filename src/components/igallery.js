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
      { src:"https://via.placeholder.com/300x200", 
        width: 3,
        height: 2,
        alt: "placehold image", 
        usertags: "externa, interna, proloc, sala", 
        googleVisionData: JSON},

      {src:"https://via.placeholder.com/200x200", width: 1, height: 1, alt: "placehold image", usertags: "externa, interna, proloc, sala", googleVisionData: JSON},
      {src:"https://via.placeholder.com/200x300", width: 2, height: 3, alt: "placehold image", usertags: "externa, interna, proloc, sala", googleVisionData: JSON}
    ]

    <HiGallery photoSet={photos} [notags] [case] [small] />

    notags = don't display text line with tags
    case = display content before <HiGallery> CONTENT </HiGallery>
    small = render small thumbnails 

    */
   
import React, { Component } from 'react'
import Gallery from 'react-photo-gallery' // https://github.com/neptunian/react-photo-gallery
import Lightbox from 'react-images'
import { Collapse, Button } from 'reactstrap'
import { Mockup as PHOTO_SET } from '../config/galleyImagesMockup'
import styled from 'styled-components'
import { FaArrowDown, FaChevronDown } from 'react-icons/fa';


const Label = styled.label`
  margin-top: 0;
  text-transform: capitalize;
  `

const Form = styled.form`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  font-size: 12px !important;  
  margin: 15px 0;
`
const CheckButton = styled.div`
  margin: 5px;
  padding: 8px 5px 0px 5px;
  display: block;
  background-color: rgb(230,88,66);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.8);
`
// styled components
const ImageGallery = styled.div`

  margin: 10px 0px;
  & div {
    justify-self: center;
  };

  ${props => props.small && "& img  { width: 64px; height: 64px; };"}   
  ${props => props.medium && "& img  { width: 128px; height: 128px; };"}
  ${props => props.large && "& img  { width: 256px; height: 256px; };"} 
  
  @media (max-width: 480px) {
     & div { justify-content: center };
     & img  { 
       width: 80px; 
       height: 80px; 
       margin: 5px;
    };
  };  
`

export default class HiGallery extends Component {

  constructor(props) {
    super(props)

    let userPhotos = this.props.photoSet ? this.props.photoSet : PHOTO_SET
    let checkboxes, alltags = []

    userPhotos.map(item => item.usertags.split(',').map(tag => {
      let userTag = tag.trim()
      if (alltags.indexOf(userTag) === -1) {alltags.push(userTag)} // se não encontrar a tag no conjunto, adiciona a tag no conjunto
      return true
    }))
 
    checkboxes = alltags.map (tag => ({label: tag, value:false}))
        
    this.state = {
      showall: true,
      photoSet: userPhotos,
      tagsCheckBoxes: checkboxes,
      collapse: false,
      collapseButtonLabel: "Filtrar por categoria "
    }
  }
 
  // ---------------------------------------------------------------------
  handleCheckBoxChanges = (e) => {

    this.setState ({showGallery: false})

    let target = e.target
    let newCheckBoxesState = this.state.tagsCheckBoxes
    let showallimages = true

    let userPhotos = this.props.photoSet ? this.props.photoSet : PHOTO_SET
    let photosToShow = []
    let tagsToShow = []

    newCheckBoxesState.forEach(CheckBox => {
      if (CheckBox.label === target.name) {
        CheckBox.value = !CheckBox.value  // inverte o valor do checkBox clicado
      }
      if (CheckBox.value) {
        showallimages = false // se há algum checkbox selecionado, não mostra mais todas as imagens
        tagsToShow.push(CheckBox.label) // adiciona a tag no conjunto de tagas que precisam ser mostradas
      }
    })

    if (!showallimages) { // se não for pra mostrar todas as imagens...
      userPhotos.forEach(photo => { // verifica em cada imagem
        tagsToShow.forEach(tag => { // se contém uma das tags que devem ser exibidas
          let userTags = photo.usertags
          if (userTags.indexOf(tag) > -1) {
            if (!photosToShow.includes(photo)) {
              photosToShow.push(photo) // e adiciona ao conjunto de imagens que deve ser exibido
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

  collapseToggle = (e) => {
    let buttonLabel = this.state.colappse ? "Fechar categorias " : "Filtrar por categorias "
    this.setState( 
      { collapse: !this.state.collapse,
        collapseButtonLabel: buttonLabel
      });
  }
   // ------------------------------------ RENDER ------------------------------------------

  render() {

    let randomNumber = new Date().getTime()
    let randomKey = "gallery-"+randomNumber.toString();

    return (
    <React.Fragment>
     { this.props.children }
     {!this.props.notags &&
      <>
      <Button color="primary" onClick={this.collapseToggle}>{this.state.collapseButtonLabel}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Form>
              { this.state.tagsCheckBoxes.map( (SelectButton, index) =>
              <CheckButton key={index}>
                  <input name={SelectButton.label}
                    type="checkbox"
                    checked={SelectButton.value}
                    onChange={this.handleCheckBoxChanges} />
                  <Label>&nbsp;{SelectButton.label}</Label>
                </CheckButton> 
              )} 
          </Form>
        </Collapse>
      </>}
      <ImageGallery key={randomKey}>
         <Gallery 
            photos={this.state.photoSet} 
            onClick={this.openLightbox}
            /> 
        <Lightbox 
          images={this.state.photoSet}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen} />     
      </ImageGallery>
      </React.Fragment>
  )}
}