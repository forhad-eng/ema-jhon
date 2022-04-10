import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import CustomLink from '../CustomLink/CustomLink'
import logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
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
                    {user?.emailVerified ? (
                        <span style={{ color: 'white' }}>
                            {user.email} <button onClick={() => signOut(auth)}>Sign out</button>
                        </span>
                    ) : (
                        <CustomLink to="/login">Login</CustomLink>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header
