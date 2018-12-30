import React from 'react'
import './jumbotron.css'
import { FaAngleDown } from 'react-icons/fa';

const Jumbotron = (props) => (
    <div className="jumbotron jumboImage menuIsFixed jumboSize">
    <div className="container">
    <div className="row justify-content-center">
        <div className="col col-sm-6 col-xg-3">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.tagline}</p>
            <hr className="my-4"/>
            <a className="styled-button-1" href="/">Conheça a gente&nbsp;<FaAngleDown/></a>
            </div>
        </div>
    </div>
  </div>
)

export default Jumbotron