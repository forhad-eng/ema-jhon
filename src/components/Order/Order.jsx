import { css } from '@emotion/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { clearCart, removeItem } from '../../utilities/localStorage'
import Cart from '../Cart/Cart'
import CustomLink from '../CustomLink/CustomLink'
import OrderItem from '../OrderItem/OrderItem'
import './Order.css'

const override = css`
    display: flex;
    justify-content: center;
    margin: 180px 0;
    border-color: red;
`

const Order = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(!loading)
    }, [])

    const removeItemHandler = productID => {
        const newCart = cart.filter(product => product._id !== productID)
        setCart(newCart)
        removeItem(productID)
    }

    const clearCartHandler = () => {
        clearCart()
        setCart([])
    }

    return loading ? (
        <ScaleLoader loading={loading} css={override} size={60} />
    ) : (
        <div className="container">
            <div className="order-container">
                {cart.map(product => (
                    <OrderItem key={product._id} product={product} removeHandler={removeItemHandler}></OrderItem>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCartHandler={clearCartHandler}>
                    <CustomLink to="/shipping">
                        <button className="remove-btn">
                            Proceed Shipping <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </CustomLink>
                </Cart>
            </div>
        </div>
    )
}

export default Order
