import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import './customButton.css'

// props
// model 1:gradient / 2:line
// url
// labem
// quick example: <CustomButton model="1" url="/" label="Go Home" />

const CustomButton = (props) => {
     
var clName = props.model ? props.model : "1"
clName="style-button-"+clName

return (
    <React.Fragment>
        <a href={props.url} className={clName}>{props.label}&nbsp;<FaAngleRight/></a>
    </React.Fragment>
)
}

export default CustomButton