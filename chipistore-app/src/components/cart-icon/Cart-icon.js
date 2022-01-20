import React from 'react';
import shoppingCart from '../../assets/shopping-cart.png'
import './Cart-icon.css'
import { CartContext } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const navigate = useNavigate();
    const { itemQuantity } = React.useContext(CartContext);

    return (
        <div className='container' onClick={() => navigate('/cart')}>
            <img
                alt='cart-icon'
                src={shoppingCart}
            />
            {
                itemQuantity > 0 ? <span className='cart-items'>{itemQuantity}</span> : null
            }

        </div>
    )
}

export default CartIcon