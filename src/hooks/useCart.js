import { useEffect, useState } from 'react'
import { getCart } from '../utilities/localStorage'

const useCart = products => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const newCart = []
        const storedCart = getCart()
        for (const productID in storedCart) {
            const product = products.find(pd => pd.id === productID)
            if (product) {
                product.quantity = storedCart[productID]
                newCart.push(product)
            }
        }
        setCart(newCart)
    }, [products])

    return [cart, setCart]
}

export default useCart
