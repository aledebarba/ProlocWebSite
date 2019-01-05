import React from 'react'
import './case.css'
import { FaFilm } from 'react-icons/fa'
import CustomButton from './customButton'

/* 
Props
    title 
    text
    date
    category
*/


const MovieCase = (props) => { 

return (
        <React.Fragment>
                <div className="row justify-content-center movie-case">
                    <div className="col-md-6 caseLeftPanel">
                        <h5>{ FaFilm }&nbsp;</h5>
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                            {props.withButton &&
                                <CustomButton model='3' label='Conheça mais cases' url='/cases/' />
                            }
                    </div>
                    <div className="col-md-6 caseRightPanel">
                        <div className="videoWrapper">
                            <iframe title="movie" src="https://www.youtube.com/embed/o29H5FYt130" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default MovieCase