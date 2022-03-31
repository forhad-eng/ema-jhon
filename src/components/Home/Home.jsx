import React from 'react'
import CustomLink from '../CustomLink/CustomLink'
import banner from '../images/austin-wade-AoYT0ArTTmg-unsplash 1.png'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div>
                <h1 className="home-title">New Collection For Fall</h1>
                <p className="home-text">Discover all the new arrivals of ready-to-wear collection</p>
                <CustomLink to="/shop">
                    <button className="shop-btn">Shop Now</button>
                </CustomLink>
            </div>
            <div className="home-banner">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Home
