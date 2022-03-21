import React from 'react'
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="" />
                <div className="list">
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
