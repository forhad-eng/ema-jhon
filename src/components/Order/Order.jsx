import { css } from '@emotion/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { removeItem } from '../../utilities/localStorage'
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
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(!loading)
    }, [])

    const removeItemHandler = productID => {
        const newCart = cart.filter(product => product.id !== productID)
        setCart(newCart)
        removeItem(productID)
    }

    return loading ? (
        <ScaleLoader loading={loading} css={override} size={60} />
    ) : (
        <div className="container">
            <div className="order-container">
                {cart.map(product => (
                    <OrderItem key={product.id} product={product} removeHandler={removeItemHandler}></OrderItem>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <CustomLink to="/inventory">
                        <button className="remove-btn">
                            Proceed Checkout <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </CustomLink>
                </Cart>
            </div>
        </div>
    )
}

export default Order
