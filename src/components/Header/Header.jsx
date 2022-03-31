import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'
import logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <div className="navigation">
                    <CustomLink to="/shop">Shop</CustomLink>
                    <CustomLink to="/order">Order</CustomLink>
                    <CustomLink to="/inventory">Inventory</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
