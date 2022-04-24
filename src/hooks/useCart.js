import { useEffect, useState } from 'react'
import { getCart } from '../utilities/localStorage'

const useCart = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const newCart = []
        const storedCart = getCart()
        const keys = Object.keys(storedCart)

        fetch('http://localhost:5000/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products)
                for (const productID in storedCart) {
                    const product = products.find(pd => pd._id === productID)
                    if (product) {
                        product.quantity = storedCart[productID]
                        newCart.push(product)
                    }
                }
                setCart(newCart)
            })
    }, [])

    return [cart, setCart]
}

export default useCart
