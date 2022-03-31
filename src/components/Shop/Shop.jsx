import React from 'react'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { addToCart } from '../../utilities/localStorage'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'
import CustomLink from '../CustomLink/CustomLink'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

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
                <Cart cart={cart}>
                    <CustomLink to="/order">
                        <button className="remove-btn">
                            Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </CustomLink>
                </Cart>
            </div>
        </div>
    )
}

export default Shop
