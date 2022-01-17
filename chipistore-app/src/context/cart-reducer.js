const ShoppingCartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            if (!state.cartItems.find(i => i.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload, quantity: 1,
                })
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumCartItems(state.cartItems)
            }
        case 'INCREASE':
            const findIncreaseItemIndex = state.cartItems.findIndex(item =>
                item.id === action.payload.id);
            state.cartItems[findIncreaseItemIndex].quantity++;
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumCartItems(state.cartItems),
            }
        case 'DECREASE':
            const findDecreaseItemIndex = state.cartItems.findIndex(item =>
                item.id === action.payload.id);
            const foundItem = state.cartItems[findDecreaseItemIndex]
            if (foundItem.quantity > 1) foundItem.quantity--;
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumCartItems(state.cartItems),
            }
        case 'DELETE_PROD':
            const newCart = state.cartItems.filter(i => i.id !== action.payload.id);
            return {
                ...state,
                cartItems: [...newCart],
                ...sumCartItems(newCart),
            }
        case 'CLEAR_CART':
            //remove the cart in localstorage when user clear it
            localStorage.removeItem('cartItem');
            return {
                cartItems: [],
                itemQuantity: 0,
                totalAmount: 0
            }
        default:
            return state;
    }
}
//helper functions
//count number of intems in cart and total amount
export const sumCartItems = (items) => {
    storeCart(items);
    return {
        itemQuantity: items.reduce((sum, prod) => sum + prod.quantity, 0),
        totalAmount: items.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
}
//check if product is in the cart
export const isItemInCart = (product, cartItems) => {
    return cartItems.find(i => i.id === product.id)
}

//store cart items in localstorage
const storeCart = (cartItems) => {
    //check if there is any item in cart, if yes, store it
    const foundCart = cartItems.length > 0 ? cartItems : [];
    localStorage.setItem('cartItem', JSON.stringify(foundCart))
}

export default ShoppingCartReducer;