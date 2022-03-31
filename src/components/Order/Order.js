import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { removeItem } from '../../utilities/localStorage'
import Cart from '../Cart/Cart'
import CustomLink from '../CustomLink/CustomLink'
import OrderItem from '../OrderItem/OrderItem'
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

    const removeItemHandler = productID => {
        const newCart = cart.filter(product => product.id !== productID)
        setCart(newCart)
        removeItem(productID)
    }

    return (
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
