import React from 'react'
import Background from "../images/heroimage.jpg"
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-scroll'
import CustomButtom from '../components/customButton'
import styled from "styled-components";
import LazyHero from 'react-lazy-hero'

const HeroContent=styled.div`
    position: absolute;
    bottom: 0; 
    left: 0;
    width: 100%;
    padding: 100px;

    & h1 {
        font-family: 'Merriweather', 'Times New Roman', Times, serif;
        font-size: 4em !important;
        color: white;
        text-align: center;
        padding: 0;
        margin: 0;
    }

    & h2 {
        font-family: 'Merriweather Sans', Arial, Helvetica, sans-serif !important;
        font-weight: normal;
        text-align: center;
        padding: 0;
        margin: 0 0 100px 0;
        font-size: 1.5em !important;  
    }
`

const Jumbotron = props => (
    <LazyHero 
        imageSrc={Background}
        minHeight='90vh'
        opacity='0'
        parallaxOffset='50'
        isFixed='false'
        transitionDuration="100">
        <HeroContent>             
        <h1>{props.title}</h1>
        <h2>{props.lead}</h2>
        <Link 
            activeClass="active"
            to="Carousel"
            smooth
            duration={1000}
            offset={-100}
            delay={300}>
            <CustomButtom Zero>
                Saiba Mais&nbsp;<FaAngleDown />
            </CustomButtom>
        </Link>
        </HeroContent> 
    </LazyHero>
)

export default Jumbotron