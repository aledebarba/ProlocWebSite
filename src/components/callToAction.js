import React, { Component } from 'react'
import "./callToAction.css"
import CustomButton from './customButton'

// props Title, Text, Button, Url 

export default class callToAction extends Component {

  render() {


    let { title, text, btnUrl, label } = this.defineProps();


    return (
        <React.Fragment>
        <div className="container">
            <div className="row justify-content-center call-to-action">
                <div className="col">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <CustomButton model="1" url={btnUrl} label={label} />
                </div>
            </div>
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
