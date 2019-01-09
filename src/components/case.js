import React, {Component } from 'react'
import './case.css'
import { FaFilm } from 'react-icons/fa'
import CustomButton from './customButton'

/* 
Props
    title 
    text
    date
    tags
    imagesArr
    yUrl
*/

export default class MovieCase extends Component {

  render() {

    return (
        <React.Fragment>
        <div className="row justify-content-center movie-case">
            <div className="col-md-6 caseLeftPanel">
                <h5><FaFilm style={{marginRight: "15px"}}/>{this.props.date}</h5>
                <h3>{this.props.title }</h3>
                <p>{ this.getPostText() }</p>
                {this.props.withButton && <CustomButton model='3' label='Conheça mais cases' url='/cases/' /> }
                <h5>{this.getTags()}</h5>
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
        let finalTags = ""
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
