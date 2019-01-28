import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components'

/*
syntax
*/

const Default = styled.a`
    border-radius: 50px;
    padding: 10px 25px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.75);
    text-align: center;
    font-size: 16px; 

    background: linear-gradient(90deg, #DE533C 10.79%, #A73313 92.45%), #C4C4C4;
    color: #FFF385 !important;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.75);
`
const Lineout = styled.a`
    border-radius: 50px;
    padding: 10px 25px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.75);
    text-align: center;

    background: none;
    color: coral;
    border: solid 1px coral;
` 
const Small = styled.a`
    border-radius: 50px;
    padding: 3px 5px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.75);
    text-align: center;

    font-size: 12px;
    background: coral;
    color: black;
    font-weight: bold;  
`

const CustomButton = (props) => {

    if (props.Small) { 
        return (<Small href={props.url}>{props.label}{props.children}&nbsp;<FaAngleRight />{props.children}</Small>)
    } else if (props.Lineout) {
        return (<Lineout href={props.url}>{props.label}{props.children}&nbsp;<FaAngleRight />{props.children}</Lineout>)
    } else {
        return (<Default href={props.url}>{props.label}{props.children}&nbsp;<FaAngleRight /></Default>)
    }
}   

export default CustomButton