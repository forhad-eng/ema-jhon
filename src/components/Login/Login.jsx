import React, { useState } from 'react'
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import facebookLogo from '../images/facebook.png'
import googleLogo from '../images/google.png'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [warning, setWarning] = useState('')
    const [SignInWithEmailAndPassword, , , error] = useSignInWithEmailAndPassword(auth)
    const [SignInWithGoogle] = useSignInWithGoogle(auth)
    const [user] = useAuthState(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    user?.emailVerified && navigate(from, { replace: true })

    const loginHandler = e => {
        e.preventDefault()
        SignInWithEmailAndPassword(email, pass).then(() => {
            setWarning('Please verify your email first')
        })
    }

    const googleSignInHandler = () => {
        SignInWithGoogle()
    }

    return (
        <div className="login-container">
            <div>
                <h1 className="form-title">Login</h1>
                <form onSubmit={loginHandler}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onBlur={e => setEmail(e.target.value)} type="email" name="email" required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input onBlur={e => setPass(e.target.value)} type="password" name="password" required />
                    <br />
                    {error && <p style={{ color: 'red' }}>{error.message}</p>}
                    {warning && <p style={{ color: 'red', margin: '0', marginBottom: '5px' }}>{warning}</p>}
                    <input type="submit" value="Login" />
                </form>
                <p className="form-link">
                    New to Ema jhon?
                    <Link to="/register">Create an account</Link>
                </p>
                <div className="sign-in-options">
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                <div className="sign-in-logos">
                    <img onClick={googleSignInHandler} src={googleLogo} alt="" />
                    <img src={facebookLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
