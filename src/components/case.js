import React from 'react'
import './case.css'

const MovieCase = (props) => {

    return (
        <React.Fragment>
                <div className="row justify-content-center">
                    <div className="col  col-md-4">
                        <h3>{props.title}</h3>
                        <p>{props.lead}</p>
                    </div>
                    <div className="col col-md-8">
                        <div className="videoWrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/o29H5FYt130" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
            </div>

        </React.Fragment>
    )
}
export default MovieCase