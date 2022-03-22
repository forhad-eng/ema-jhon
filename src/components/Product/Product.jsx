import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Product.css'

const Product = ({ product, cartHandler }) => {
    const { name, price, img, seller, ratings } = product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">Price: {price}</p>
                <p className="product-seller">Manufacture: {seller}</p>
                <p className="product-rating">Ratings: {ratings} star</p>
            </div>
            <button onClick={() => cartHandler(product)}>
                <p>
                    Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>{' '}
                </p>
            </button>
        </div>
    )
}

export default Product
