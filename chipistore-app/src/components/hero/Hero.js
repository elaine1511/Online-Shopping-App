import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero is-medium is-danger hero-img">
            <div className="hero-body">
                <div className='container has-text-centered'>
                    <h2 className="title">
                        Welcome, boo-boo!
                    </h2>
                    <h3 className="subtitle">
                        Chipi Store is a one-stop shopping destination for kid's creative toys.
                        <br />Endowed with textile resources in Vietnam, partnered with top experienced artisans,
                        <br />our brand offers nothing but the best for our little angels.
                    </h3>
                    <div>
                        <Link className="button" to="/products">Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
