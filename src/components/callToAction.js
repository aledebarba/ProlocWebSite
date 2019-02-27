import React, { Component } from 'react'
import CustomButton from './customButton'
import styled from 'styled-components'

// props Title, Text, Button, Url 

const CTASection = styled.div`
    background: linear-gradient(180deg, #866A1C 0%, #242A36 100%);
    box-shadow: 0px -30px 40px rgba(0, 0, 0, 0.85);
    padding: 50px 30px;
    margin: 50px 0px;  
    text-align: center;

    & h1 { 
        margin: 10px 10px;
        padding: 0;
        color: rgba(246, 244, 250, 0.746);
    }

    & p {
        font-size: 14px; 
        font-weight: normal; 
        margin: 10px 10px 30px 10px;
        padding: 0;
        color: #F6F4FA;
    }
`



export default class callToAction extends Component {

  render() {


    let { title, text, btnUrl, label } = this.defineProps();


    return (
        <React.Fragment>
        <div className="container">
            <CTASection className="row justify-content-center">
                <div className="col">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <CustomButton model="1" url={btnUrl} label={label} />
                </div>
            </CTASection>
     </div>
     </React.Fragment>
    )
  }

    defineProps() {
        let label = this.props.button ? this.props.button : "Button to action";
        let btnUrl = this.props.url ? this.props.url : "#";
        let title = this.props.title ? this.props.title : "Call to action title";
        let text = this.props.text ? this.props.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rerum aut quisquam fugit. Sit voluptas corrupti similique ut officiis minus, laudantium doloribus? Reiciendis accusamus saepe totam expedita doloremque facilis fugit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, dolor fuga, quod provident eius, expedita ipsam quos ipsa atque mollitia dolorem nihil laboriosam in placeat soluta error doloremque! Rem, minus?";
        return { title, text, btnUrl, label };
    }
}
