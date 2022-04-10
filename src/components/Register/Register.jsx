import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [err, setErr] = useState('')
    const [CreateUserWithEmailAndPassword, , , error] = useCreateUserWithEmailAndPassword(auth)
    const [SendEmailVerification] = useSendEmailVerification(auth)
    const navigate = useNavigate()

    const loginFromHandler = e => {
        e.preventDefault()

        if (pass !== confirmPass) {
            setErr('Password does not match')
            return
        }

        setErr('')

        CreateUserWithEmailAndPassword(email, pass).then(() => {
            SendEmailVerification()
            navigate('/login')
        })
    }

    return (
        <div className="login-container">
            <div>
                <h1 className="form-title">Register</h1>
                <form onSubmit={loginFromHandler}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onBlur={e => setEmail(e.target.value)} type="email" name="email" required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input onBlur={e => setPass(e.target.value)} type="password" name="password" required />
                    <br />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <br />
                    <input
                        onBlur={e => setConfirmPass(e.target.value)}
                        type="password"
                        name="confirm-password"
                        required
                    />
                    <br />
                    {err && <p style={{ color: 'red', margin: '0', marginBottom: '5px' }}>{err}</p>}
                    {error && <p style={{ color: 'red', margin: '0', marginBottom: '5px' }}>{error.message}</p>}
                    <input type="submit" value="Register" />
                </form>
                <p className="form-link">
                    Already have an account?
                    <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Register
