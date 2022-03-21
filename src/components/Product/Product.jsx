import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Product.css'

const Product = ({ product, addHandler }) => {
    const { name, img, price, seller, ratings } = product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">Price: {price}</p>
                <p className="product-manufact">Manufacturer: {seller}</p>
                <p className="product-rating">Rating: {ratings} star</p>
            </div>
            <button onClick={() => addHandler(product)}>
                <p>
                    Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </p>
            </button>
        </div>
    )
}

export default Product
