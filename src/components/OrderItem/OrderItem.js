import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './OrderItem.css'

const OrderItem = ({ product, removeHandler }) => {
    const { name, img, shipping, quantity, price } = product
    return (
        <div className="item-main">
            <div className="item-container">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="item-info">
                    <h4>{name}</h4>
                    <p>Price: {price}</p>
                    <p>Shipping: {shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <div>
                <button onClick={() => removeHandler(product.id)} className="item-dlt-btn">
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    )
}

export default OrderItem
