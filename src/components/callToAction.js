import React from 'react'
import "./callToAction.css"
import CustomButton from './customButton'

const CallToAction = (props) => {

    return (
            <div className="container">
                <div className="row justify-content-center call-to-action">
                    <div className="col">
                        <h1>Avalie seu projeto agora.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus distinctio suscipit dolor ipsa animi aspernatur quos debitis enim nisi itaque, reprehenderit labore dolores, adipisci eligendi voluptatum mollitia vel atque.</p>
                        <CustomButton model="1" url="/" label="Cadaste-se grátis" />
                    </div>
                </div>
            </div>
    )
}

export default CallToAction