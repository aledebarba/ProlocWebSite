import React from 'react'
import './jumbotron.css'
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-scroll'
import CustomButtom from '../components/customButton'


const Jumbotron = (props) => (
    <div className="jumbotron jumboImage menuIsFixed jumboSize">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-8 col-md-6">
                    <h1>{props.title}</h1>
                    <p className="lead">{props.lead}</p>
                    <hr className="my-4" />
                    <Link activeClass="active" to="Carousel" smooth duration={1000} offset={-100} delay={300}>
                          <CustomButtom Zero>Saiba Mais&nbsp;<FaAngleDown /></CustomButtom>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Jumbotron