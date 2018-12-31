import React from 'react'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'

const TeamCard = (props) => {
    // Available Props
    // imgURL
    // job
    // name
    // lead
    // linkedin + facebookL
    
    var imagem = props.imgURL
    var linkedin = props.linkedin ? "https://linkedin.com/in/"+ props.linkedin : "https://linkedin.com"
    var facebook = props.facebook ? "https://facebook.com/"+ props.facebook : "https://facebook.com"

    return (
        <React.Fragment>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
                    <img src={imagem} className="card-img-top" alt="Foto do colaborador" />
                    <div className="card-body">
                        <h4 className="card-title">{props.job}</h4>
                        <h5>{props.name}</h5>
                        <p className="card-text">{props.lead}</p>
                        <a href={facebook} className="teamButton"><FaFacebook/></a>
                        <a href={linkedin} className="teamButton"><FaLinkedinIn/></a>
                    </div>
                </div>
        </React.Fragment>
)
}

export default TeamCard