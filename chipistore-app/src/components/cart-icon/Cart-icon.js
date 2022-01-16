import React from 'react';
import shoppingCart from '../../assets/shopping-cart.png'
import './Cart-icon.css'

const CartIcon = () => {
    return (
        <div className='container'>
            <img
                alt='cart-icon'
                src={shoppingCart}
            />
            <span className='cart-items'>4</span>
        </div>
    )
}

export default CartIcon