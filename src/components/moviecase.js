import React, {Component} from 'react'
import './moviecase.css'
import { FaFilm } from 'react-icons/fa'
import CustomButton from './customButton'
import HiGallery from './igallery'

/* 
Rederiza um case
Recebe e resolve:
    title={tituloDoCase}
    text ={textoDoCase}
    date ={dataDoCase}
    tags = [tags,do,case]
    imagesArr = [array,de,urls,de,imagens,que,fizeram,parte,do,case]
    yUrl = url do Youtube onde está o filme final do case
*/

export default class MovieCase extends Component {

    constructor (props) {
        super(props)
        // caso o componente não receba um array, mostra um mockup
        var imagesArr = []
        if (this.props.imagesArr) 
            { imagesArr = this.props.imagesArr } 
        else {
            imagesArr.push('https://via.placeholder.com/150')
            imagesArr.push('https://via.placeholder.com/150')
            imagesArr.push('https://via.placeholder.com/150')
            imagesArr.push('https://via.placeholder.com/150')        
        }

        // trata os dados recebidos e transforma para o formato adequado para HiGallery
        var imagesGalleryArray = []
        imagesArr.forEach(imageName => {
            let myurl = imageName.replace("https://www.dropbox.com","https://dl.dropboxusercontent.com");
                myurl = myurl.replace("dl=0","raw=1");
                              
                imagesGalleryArray.push(
                {
                    src: myurl,
                    width: 1,
                    height: 1,
                    alt: "locação da Proloc",
                    usertags: this.props.tags.join()
                })
            })
   
        this.state = {
            images: imagesGalleryArray 
        }
    }

  render() {
    return (
        <React.Fragment>
        <div className="row justify-content-center movie-case">
            <div className="col-md-6 caseLeftPanel">
                <h5><FaFilm style={{marginRight: "15px"}}/>{this.props.date}</h5>
                <h3>{this.props.title }</h3>
                <h5>{this.getTags()}</h5>
                <p>{this.getPostText() }</p>
                <h4>Locações que fizeram parte desse filme</h4>
                <div className="movieCaseImages"> 
                    <HiGallery photoSet={this.state.images} small case notags />
                </div>                
                {this.props.withButton && <CustomButton model='3' label='Conheça mais cases' url='/cases/' /> }
            </div>
            <div className="col-md-6 caseRightPanel">
                <div className="videoWrapper">
                    <iframe title="movie" src={this.getYoutubeURL()} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
  }

    getTags() {
        let formatedTags = this.props.tags ? this.props.tags : ["notags"]
        formatedTags = formatedTags.map ( function(tag) {
            return "#"+tag+"  ";
        })
        return (formatedTags.join(''))
    }

    getYoutubeURL() {
        // caso não tenha passado um vídeo, põe um video default
        let youtube = this.props.yUrl ? this.props.yUrl : "https://www.youtube.com/embed/yy5THitqPBw";
        // caso a url do video seja o link de navegador, muda para link embed
        youtube = youtube.replace("watch?v=", "embed/"); // caso tenha sido passado o link de view
        return youtube;
    }

    getPostText() {
        // Just remove initial p tags
        let postText = this.props.text;
        postText = postText.replace("<p>", "");
        postText = postText.replace("</p>", "");
        return postText;
    }

}
