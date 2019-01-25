import React from 'react'
import './jumbotron.css'
import { FaAngleDown } from 'react-icons/fa';

const Jumbotron = (props) => (
    <div className="jumbotron jumboImage menuIsFixed jumboSize">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <h1>{props.title}</h1>
                    <p className="lead">{props.lead}</p>
                    <hr className="my-4" />
                    <a className="styled-button-1" href="/#carousel">Saiba Mais&nbsp;<FaAngleDown /></a>
                </div>
            </div>
        </div>
    </div>
)

export default Jumbotron