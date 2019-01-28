import React from 'react'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import Palette from '../styles/palette'
import styled from 'styled-components'

/* SYNTAX
 <TeamCard 
    Img=url
    Job=string
    Name=string
    Lead=string
    Linkedin=linkedin ID
    Facebook=facebook ID
 */

 const Card = styled.div`
    margin: 10px;
    padding: 0px;
    background: ${Palette.pastelgreen};
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center !important;
    `

 const Photo = styled.img`
    border-radius: 50%;
    width: 60%;
    height: auto;
    margin: 20px auto;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.80);
    border: solid 1px salmon;
    `
const CardJob = styled.h4`
    color: ${Palette.yellow};
    font-family: 'Merriweather Sans', Arial, Helvetica, sans-serif;
    `
const CardName = styled.h5`
    color: ${Palette.paleblue};
    `
const CardLead = styled.p`
    margin: 5px;
    padding: 0px;
    color: ${Palette.salmon};
    
    @media (max-width: 460px) {
        display: none;
    };
    ` 
const CardSocial = styled.ul`  
    padding: 0;
    margin-top: auto;
`
 
const TeamCard = (props) => {

    const linkedin = props.Linkedin ? "https://linkedin.com/in/"+ props.Linkedin : "https://linkedin.com"
    const facebook = props.Facebook ? "https://facebook.com/"+ props.Facebook : "https://facebook.com"

    return (
        <React.Fragment>
                <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <Photo src={props.Img} width="100px" className="card-img-top" alt="Foto do colaborador" />
                    <CardName>{props.Name}</CardName>
                    <CardJob>{props.Job}</CardJob>
                    <CardLead>{props.Lead}</CardLead>
                    <CardSocial>
                        <a href={facebook} className="teamButton"><FaFacebook/></a>
                        <a href={linkedin} className="teamButton"><FaLinkedinIn/></a>
                    </CardSocial>
                </Card>
        </React.Fragment>
)
}

export default TeamCard