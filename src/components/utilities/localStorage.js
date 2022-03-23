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

export { addToCart, getStoredCart as getCart }
