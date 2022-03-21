import React from 'react'
import './Product.css'

const Product = ({ product }) => {
    const { name, img, price, seller, ratings } = product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">Price: {price}</p>
                <p className="product-manufact">Manufacturer: {seller}</p>
                <p className="product-rating">rating: {ratings} star</p>
            </div>
            <button><p>Add to Cart</p></button>
        </div>
    )
}

export default Product
