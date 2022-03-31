import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Cart = ({ cart, clearCart, children }) => {
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
            <button onClick={clearCart} className="clear-btn">
                Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            {children}
        </>
    )
}

export default Cart
