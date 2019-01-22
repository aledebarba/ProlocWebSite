import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
// scroll-down to end of file for syntax and documentation

export default class HiGallery extends Component {

  constructor(props) {
    super(props)

    let userPhotos = this.props.photoSet ? this.props.photoSet : PHOTO_SET
    let checkboxes, alltags = []

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

  handleCheckBoxChanges = (e) => {
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
      tagsCheckBoxes: newCheckBoxesState,
      photoSet: photosToShow
    }
    )
  }

  render() {
    return <React.Fragment>
      <div className="containe justify-content-center">
      <h4>Selecione a categoria que deseja ver</h4>
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
          <div style={{marginTop: 50, marginBottom: 50}}>
            <Gallery photos={this.state.photoSet} />
          </div>
      </div>
      </React.Fragment>
  }
}

const labelStyle = {
  marginTop: 0,
  textTransform: "capitalize"
}
const formStyles = {
  color: "white",
  display: "flex",
  fontSize: 12
}

const itemStyles = {
  marginRight: 10
}

const PHOTO_SET = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
    alt: "locação da Proloc ",
    usertags: "interna, casa"
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
    alt: "locação da Proloc ",
    usertags: "externa, cidade"
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
    alt: "locação da Proloc ",
    usertags: "interna, casa, cozinha"
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
    alt: "locação da Proloc ",
    usertags: "interna, casa, sala"
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
    alt: "locação da Proloc ",
    usertags: "externa, cidade"
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
    alt: "locação da Proloc ",
    usertags: "externa, estrada, campo"
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
    alt: "locação da Proloc ",
    usertags: "externa, praia"
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
    alt: "locação da Proloc ",
    usertags: "interna, casa, cozinha"
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
    alt: "locação da Proloc ",
    usertags: "externa, casa, piscina"
  }
];

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