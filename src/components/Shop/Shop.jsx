import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    let price = 0
    const charge = 100
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCartHandle = product => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className="container">
            <div className="product-container">
                {products.map(product => (
                    <Product product={product} key={product.id} cartHandler={addToCartHandle}></Product>
                ))}
            </div>
            <div className="cart-container">
                <p className="order-summary">Order Summary</p>
                <div className="cart-info">
                    <p>Selected Items: {cart.length}</p>
                    <p>
                        {cart.forEach(item => (price += item.price))}
                        Total Price: {price}
                    </p>
                    <p>Total Shipping Charge: {charge}</p>
                    <p>Tax: {(price * 0.2).toFixed(2)}</p>
                    <p>Grand Total: {(price + price * 0.2 + charge).toFixed(2)}</p>
                </div>
                <button onClick={() => window.location.reload()} className="clear-btn">
                    Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <button className="remove-btn">
                    Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    )
}

export default Shop
