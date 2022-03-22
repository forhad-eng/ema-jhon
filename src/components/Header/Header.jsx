import React from 'react'
import logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="" />
                <div>
                    <a href="/Order">Order</a>
                    <a href="/review">Order review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
