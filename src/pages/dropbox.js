import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import DropboxChooser from 'react-dropbox-chooser'
import HiGallery from '../components/igallery'

const APP_KEY = "1xt3fgikkgsgza6";

export default class dropbox extends Component {
    constructor (props) {
        super(props)

        this.state = {
            somethingChoosed: false,
            dropBoxSelectedImages: []
        }

    }

    userChoosedFiles = (files) => {
        
        this.setState ({
            somethingChoosed: false,
            dropBoxSelectedImages: []
        })

        let filesChoosed = []
        files.forEach(drobBoxfile => {
            let link  = drobBoxfile.link.replace('dl=0','raw=1')
            filesChoosed.push({
                src: link, 
                width: 3,
                height: 2,
                usertags: "no,tags",
                alt: drobBoxfile.name
            })
        });
      
         this.setState ({
            somethingChoosed: true,
            dropBoxSelectedImages: filesChoosed
        })
    }

    userCanceled = () => {
        alert ("User Canceled")
        this.setState ({
            somethingChoosed: false,
            dropBoxSelectedImages: []
        })
    }

  render() {
    return (
        <>
        <Layout>
            <SEO title="Login" />
            <Header Src="https://www.dropbox.com/s/n1or0q2k38swack/brasil-vista-cidade.jpg?dl=0" />
            <div className = "container">
                <div className = "row" >
                    <div className="col">
                        <button type="button" className="btn btn-primary">
                            <DropboxChooser appKey={APP_KEY}
                                success={files => this.userChoosedFiles (files)}
                                cancel={() => this.userCanceled()}
                                multiselect={true} 
                                linktype={'preview'}
                                extensions={["images"]}>
                                <span>Escolher imagens</span>
                                <div className="dropbox"></div>
                            </DropboxChooser>
                        </button>
                    </div>
                    <div className="col">
                    { this.state.somethingChoosed 
                        ? <HiGallery photoSet={this.state.dropBoxSelectedImages} notags />
                        : <p>no images has been choosed</p>
                    }
                    </div>
                </div>
            </div>
            
        </Layout>
        </>
    )
  }
}
