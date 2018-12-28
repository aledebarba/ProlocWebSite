import React from "react"
import { Carousel } from "react-responsive-carousel"
import './carousel.css'

export default () => (
    <div className='container-fluid customCarousel'>
    <div className='row justify-content-center'>
        <div className='col col-md-6'>
            <h3>Essas são algumas locações que fazem parte de nosso catálogo:</h3>
        </div>
    </div>

    <div className='row justify-content-center'>
        <div className="col col-md-10">
    
    <Carousel   showThumbs={false} 
                showArrows={true} 
                showStatus={false} 
                autoPlay={true} 
                infiniteLoop={true}
                dynamicHeight={true}>
        <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
            <p className="legend">Legend 6</p>
        </div>
        <div>
            <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
            <p className="legend">Legend 7</p>
        </div>
    </Carousel>
    </div> {/* row */}
    </div> {/* col */}
    </div> 
        
);
