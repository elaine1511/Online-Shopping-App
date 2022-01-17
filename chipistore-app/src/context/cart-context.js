import React, { useReducer } from 'react';
import ShoppingCartReducer, { sumCartItems } from './cart-reducer';

const CartContext = React.createContext();
//check if there is cart in localstorage
const getItem = localStorage.getItem('cartItem');
console.log(getItem)
let cartItemInStorage = getItem ? JSON.parse(getItem) : [];

const initialState = { cartItems: cartItemInStorage, ...sumCartItems(cartItemInStorage) };

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);
    const addToCart = (product) => {
        dispatch({ type: 'ADD_PRODUCT', payload: product })
    }
    const increaseQuantity = (product) => {
        dispatch({ type: 'INCREASE', payload: product })
    }
    const decreaseQuantity = (product) => {
        dispatch({ type: 'DECREASE', payload: product })
    }
    const deleteProd = (product) => {
        dispatch({ type: 'DELETE_PROD', payload: product })
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    const contextValues = {
        ...state,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteProd,
        clearCart
    }
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider >
    )
}

export { CartContext, CartContextProvider };