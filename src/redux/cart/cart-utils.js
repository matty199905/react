export const addItemToCart = (cartItems, product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);

    if (productInCart) {
        return cartItems.map((item) =>

            item.id === productInCart.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    }

    return [...cartItems, { ...product, quantity: 1 }];
}




export const removeItemFromCart = (cartItems, id) => {

    const productToRemove = cartItems.find((item) => item.id === id);




    if (productToRemove.quantity > 1) {
        return cartItems.map(item =>
            item.id === productToRemove.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    }

    return cartItems.filter(item => {return item.id !== productToRemove.id});
};



export const resetShippingCost = (cartItem, SHIPPING_COST) => {
    if (cartItem.lenght === 1 && cartItem[0].quantity === 1) {
        return 0
    }

    return SHIPPING_COST = 0
}