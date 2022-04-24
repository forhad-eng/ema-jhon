import { css } from '@emotion/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import useCart from '../../hooks/useCart'
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
    const [products, setProducts] = useState([])
    const [cart, setCart] = useCart([])
    const [pages, setPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(10)

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${currentPage}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, size])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const number = Math.ceil(data.count / 10)
                setPages(number)
            })
    }, [])

    const addToCartHandle = selectedProduct => {
        let newCart = []
        const pd = cart.find(product => product._id === selectedProduct._id)
        if (!pd) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } else {
            pd.quantity += 1
            const rest = cart.filter(product => product._id !== pd._id)
            newCart = [...rest, pd]
        }
        setCart(newCart)
        addToCart(selectedProduct._id)
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
                    <Product key={product._id} product={product} cartHandler={addToCartHandle}></Product>
                ))}

                <div className="pagenation">
                    {[...Array(pages).keys()].map(page => (
                        <button onClick={() => setCurrentPage(page)} className={page === currentPage ? 'selected' : ''}>
                            {page + 1}
                        </button>
                    ))}

                    <select onChange={() => setSize(e => setSize(e.target.value))}>
                        <option value="5">5</option>
                        <option value="10" selected>
                            10
                        </option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCartHandler={clearCartHandler}>
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
