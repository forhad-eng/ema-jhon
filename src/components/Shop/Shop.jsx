import { css } from '@emotion/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ScaleLoader } from 'react-spinners'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { addToCart, clearCart } from '../../utilities/localStorage'
import Cart from '../Cart/Cart'
import CustomLink from '../CustomLink/CustomLink'
import Product from '../Product/Product'
import './Shop.css'

const override = css`
    display: flex;
    justify-content: center;
    margin: 180px 0;
    border-color: red;
`

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

    const clearCartHandler = () => {
        clearCart()
        setCart([])
    }

    return products.length === 0 ? (
        <ScaleLoader loading={true} css={override} size={60} />
    ) : (
        <div className="container">
            <div className="product-container">
                {products.map(product => (
                    <Product key={product.id} product={product} cartHandler={addToCartHandle}></Product>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCartHandler}>
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
