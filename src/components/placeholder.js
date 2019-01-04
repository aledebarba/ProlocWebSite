import React, { Component } from 'react'

export default class PlaceHolder extends Component {

    defineTitle = () => {
        return this.props.title ? this.props.title : <p>Place Holder Space</p>
    }

    render() {
        return (

            <div style={{
                display: 'block',
                backgroundColor: 'gray',
                padding: '20px',
                margin: '30px 20px',
                color: 'white',
                textAlign: 'center'
            }}>
               <h1>{this.defineTitle()}</h1>
               <div style={{ color: 'white'}}>
                    {this.props.children}
               </div>
            </div>
        )
    }

}