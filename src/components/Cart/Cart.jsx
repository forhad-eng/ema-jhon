import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { removeCart } from '../utilities/localStorage'

const Cart = ({ cart }) => {
    let quantity = 0
    let price = 0
    let charge = 0
    for (const product of cart) {
        quantity += product.quantity
        price += product.price * product.quantity
        charge += product.shipping
    }
    return (
        <>
            <p className="order-summary">Order Summary</p>
            <div className="cart-info">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: {price}</p>
                <p>Total Shipping Charge: {charge}</p>
                <p>Tax: {(price * 0.2).toFixed(2)}</p>
                <p>Grand Total: {(price + price * 0.2 + charge).toFixed(2)}</p>
            </div>
            <button onClick={removeCart} className="clear-btn">
                Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            <button className="remove-btn">
                Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </>
    )
}

export default Cart
