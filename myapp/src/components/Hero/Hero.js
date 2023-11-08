// structure
import React from 'react'
import "./hero.css"

function Hero(props){
    return(
        <div className="hero-wrapper">
            {/*-------- Welcome Page --------*/}
            <div className='welcome-page'>
                <section className='welcome-heading-wrapper'>
                    <h1>BM Travel Blog</h1>
                </section>
                <section className='welcome-sub-heading-wrapper'>
                    <h2>This site is awesome</h2>
                </section>
            </div>
            {/*-------- Place 1 Page --------*/}
            <div className='place-page'>

                <div className='place-heading-wrapper'>
                    <h1>Place 1: </h1>
                </div>
                <div className='place-img-wrapper'>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
                <div className='place-intro-wrapper'>
                    <p>Some description...</p>
                </div>

            </div>
            {/*-------- Place 2 Page --------*/}
            <div className='place-page'>

            <div className='place-heading-wrapper'>
                    <h1>Place 1: </h1>
                </div>
                <div className='place-img-wrapper'>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
                <div className='place-intro-wrapper'>
                    <p>Some description...</p>
                </div>

            </div>
            {/*-------- Place 3 Page --------*/}
            <div className='place-page'>

            <div className='place-heading-wrapper'>
                    <h1>Place 1: </h1>
                </div>
                <div className='place-img-wrapper'>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
                <div className='place-intro-wrapper'>
                    <p>Some description...</p>
                </div>

            </div>

        </div>
    )
};

export default Hero
