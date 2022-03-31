const addToCart = productID => {
    let shoppingCart = {}
    const cart = localStorage.getItem('shopping-cart')
    if (cart) {
        shoppingCart = JSON.parse(cart)
    }
    if (shoppingCart[productID]) {
        shoppingCart[productID] += 1
    } else {
        shoppingCart[productID] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    let shoppingCart = {}
    const cart = localStorage.getItem('shopping-cart')
    if (cart) {
        shoppingCart = JSON.parse(cart)
    }
    return shoppingCart
}

const removeItem = productID => {
    const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'))
    if (productID in shoppingCart) {
        delete shoppingCart[productID]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
}

const removeCart = () => {
    localStorage.removeItem('shopping-cart')
}

export { addToCart, getStoredCart as getCart, removeCart, removeItem }
