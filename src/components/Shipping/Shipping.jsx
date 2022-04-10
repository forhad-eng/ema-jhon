import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Shipping = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [err, setErr] = useState('')
    const [user] = useAuthState(auth)

    const loginFromHandler = e => {
        e.preventDefault()

        setErr('')
    }

    return (
        <div className="login-container">
            <div>
                <h1 className="form-title">Shipping Information</h1>
                <form onSubmit={loginFromHandler}>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input onBlur={e => setName(e.target.value)} type="text" name="name" required />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input value={user.email} style={{ outline: 'none', background: 'cyan' }} type="email" readOnly />
                    <br />
                    <label htmlFor="address">Address</label>
                    <br />
                    <input onBlur={e => setAddress(e.target.value)} type="text" name="address" required />
                    <br />
                    <label htmlFor="phone">Phone</label>
                    <br />
                    <input onBlur={e => setPhone(e.target.value)} type="text" name="phone" required />
                    <br />
                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    )
}

export default Shipping
