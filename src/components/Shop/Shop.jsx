import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import { addToCart, getCart } from '../utilities/localStorage'
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const newCart = []
        const savedCart = getCart()
        for (const prop in savedCart) {
            const item = products.find(product => product.id === prop)
            if (item) {
                item.quantity = savedCart[prop]
                newCart.push(item)
            }
        }
        setCart(newCart)
    }, [products])

    const addToCartHandle = selectedProduct => {
        let newCart = []
        const exits = cart.find(product => product.id === selectedProduct.id)
        if (!exits) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } else {
            selectedProduct.quantity += 1
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            newCart = [...rest, selectedProduct]
        }
        setCart(newCart)
        addToCart(selectedProduct.id)
    }

    return (
        <div className="container">
            <div className="product-container">
                {products.map(product => (
                    <Product product={product} key={product.id} cartHandler={addToCartHandle}></Product>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Shop
