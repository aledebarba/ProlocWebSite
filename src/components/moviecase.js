import React, {Component} from 'react'
import { FaFilm, FaCalendar, FaInfoCircle } from 'react-icons/fa'
import CustomButton from './customButton'
import HiGallery from './igallery'
import styled from 'styled-components'
import Palette from '../styles/palette'

/* 
Syntax
<MovieCase 
    title = string
    text = string
    date = string
    tags = [ string, string, string, ... ]
    imageArr = [ url, url, url, url, url, ...] (url = string)
    yUrk = Youtube URL (string)
    [ small ] (thumbnail size)
    [ medium ] (thumbnail size)
    [ large ] (thumbnail size)
/>
*/

const CaseWrapper = styled.div`
    margin: 0px 20px 50px 20px !important;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.8);
    text-align: left !important;
    background-color: ${Palette.darkgray};
`
const CaseInfo =  styled.div`
    text-align: left !important;
    padding: 20px 25px 50px 50px;
    background-color: ${Palette.darkgray};
    box-shadow: 0px -5px 10px rgba(0,0,0,0.8);
    @media (max-width: 960px) {
      padding-rigt: 10px;
    };
`
const CaseTitle = styled.h2`
    text-align: center !important;
    margin: 0 auto !important;
    width: 80%;
    font-size: 32px;
    background: linear-gradient(180deg, ${Palette.pastelgreen} 10.79%, black 90%), #C4C4C4;
    
    padding: 20px 0px;
    border-radius: 10px;
    box-shadow: 0px -5px 10px rgba(0,0,0,0.8);
`
const CaseSubtitle = styled.p`
    text-align: left !important;
    margin: 30px 0px 10px 0px !important;
    padding: 0px !important;
    font-size: 1em !important;

    text-align: left;
    color: ${Palette.paleblue};
` 
const CaseDetail = styled.p`
    text-align: left !important;
    color: ${Palette.yellow};
    margin: 0px !important;
    font-size: 12px !important;
    font-weight: light !important;
    padding-left: 0px;
`

const CaseText = styled.p`
    text-align: left !important;
    padding: 0px;
    margin: 0px;
`;

const ImagesWrapper = styled.div`
    margin: 0;
` 
const CaseMovie = styled.div`
    margin: 0;
    padding: 25px;
    box-shadow: 0px -5px 10px rgba(0,0,0,0.8);
    background: linear-gradient(90deg, #DE533C 10.79%, rgb(107, 91, 1) 80%), #C4C4C4;
` 

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
        <CaseTitle className="row justify-content-center">
            <FaFilm />&nbsp;{this.props.title }
        </CaseTitle>
        <CaseWrapper className="row">   
            <CaseInfo className="col-md-12 col-lg-4">
                <CaseDetail>
                    <FaCalendar/> {this.props.date} <br/>
                    <FaInfoCircle/> {this.getTags()}
                </CaseDetail>
                <CaseText>
                    {this.getPostText()}
                </CaseText>
        
                {<CustomButton model='3' label='Conheça mais cases' url='/cases/' /> && this.props.withButton}
            </CaseInfo>

            <CaseMovie className="col-md-12 col-lg-8">
                <div className="videoWrapper">
                    <iframe title="movie" src={this.getYoutubeURL()} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <CaseSubtitle>
                    <FaFilm/> Fotos das locações
                </CaseSubtitle>
                <ImagesWrapper className="movieCaseImages"> 
                    <HiGallery photoSet={this.state.images} medium case notags />
                </ImagesWrapper>
            </CaseMovie>
        </CaseWrapper>
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
