import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCartHandler = product => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    let price = 0
    const charge = 100
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(product => (
                    <Product product={product} addHandler={addToCartHandler}></Product>
                ))}
            </div>
            <div className="cart-container">
                <p className="order-summary">Order Summary</p>
                <div className="cart-info">
                    <p>Selected Item: {cart.length}</p>
                    <p>
                        {cart.forEach(item => (price = price + item.price))}
                        Total Price: {price}
                    </p>
                    <p>Total Shipping Charge: {charge}</p>
                    <p>Tax: {(price * 0.2).toFixed(2)}</p>
                    <p>Grand Total: {price + price * 0.2 + charge}</p>
                </div>
                <button onClick={() => window.location.reload()} className="clr-cart">
                    Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <button className="rmv-cart">
                    Remove Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    )
}

export default Shop
