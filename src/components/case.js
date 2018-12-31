import React from 'react'
import './case.css'
import { FaFilm } from 'react-icons/fa'
import CustomButton from './customButton'

/* 
Props
    title 
    lead
    date
    category
*/


const MovieCase = (props) => { 

    var renderButton=""
    if (props.withButton) {
        renderButton = "<CustomButton model='2' label='Conheça mais cases' url='/' />"
    }
    
return (
        <React.Fragment>
                <div className="row justify-content-center movie-case">
                    <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 caseLeftPanel">
                        <h5>{ FaFilm }&nbsp;</h5>
                        <h3>{props.title}</h3>
                        <p>{props.lead}</p>
                        { renderButton }
                    </div>
                    <div className="col col-xs-12 colr-sm-12 col-md-8 col-lg-8 caseRightPanel">
                        <div className="videoWrapper">
                            <iframe title="movie" width="560" height="315" src="https://www.youtube.com/embed/o29H5FYt130" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default MovieCase