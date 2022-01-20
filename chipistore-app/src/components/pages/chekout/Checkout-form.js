import React from 'react';
import './Checkout-form.css';
import { useNavigate } from "react-router-dom";
import { ProductContext } from '../../../context/products-context';
import { CartContext } from '../../../context/cart-context';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'



const CheckoutForm = () => {
    const { cartItems, totalAmount, clearCart } = React.useContext(CartContext);

    const handleOnSubmit = () => {

    }
    return (

        <form onSubmit={handleOnSubmit()}>
            <h2>Customer Info</h2>
            <label>First Name:</label>
            <input
                name="firstname"
                type='text'
                placeholder='John'
            />
            <input
                name='lastname'
                type='text'
                label='Last name'
                placeholder='Smith'
            />
            <input
                name='email'
                label='Email'
                placeholder='xyz@example.com'
                type='email'
            />
        </form>

    )
}

export default CheckoutForm;
