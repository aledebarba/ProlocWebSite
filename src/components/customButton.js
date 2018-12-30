import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';

const CustomButton = (props) => {
     
var clName = "styled-button-" + props.model ? props.model : "1"

return (
    <React.Fragment>
        <a href="{props.url}" className={clName}>{props.label}&nbsp;<FaArrowLeft/></a>
    </React.Fragment>
)
}

export default CustomButton