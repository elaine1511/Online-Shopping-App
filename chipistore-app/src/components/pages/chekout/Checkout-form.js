import React, { useContext, useEffect, useState } from "react";
import "./Checkout-form.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../../context/products-context";
import { CartContext } from "../../../context/cart-context";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { cartItems, totalAmount, clearCart } = useContext(CartContext);
    const { checkout } = useContext(ProductContext);
    const [orderDetails, setOrderDetails] = useState({ cartItems, totalAmount, token: null, address: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (orderDetails.token) {
            checkout(orderDetails);
        }
    }, [orderDetails]);

    const handleCardChange = (e) => {
        if (e.error) {
            setError(e.error.message);
        } else {
            setError(null);
        }
    };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const cards = elements.getElement(CardElement);
        const result = await stripe.createToken(cards);
        console.log(result)
        if (result.error) {
            // Show error to a customer (for example, payment details incomplete)
            setError(result.error.message)
            console.log(error);
        } else {
            const token = result.token;
            setOrderDetails({ ...orderDetails, token: token.id })
        }
    };
    return (
        <form onSubmit={handleOnSubmit()}>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Customer Info</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="First Name" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Last Name" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                            <input
                                className="input is-success"
                                type="email"
                                placeholder="Email"
                                value="elaine@smith.com"
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fa fa-check"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Shipping Address</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="Adress"
                                onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-address-card"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="stripe-section">
                <label htmlFor="stripe-element">
                    <h3>Card Details</h3>
                    <CardElement
                        options={CARD_ELEMENT_OPTIONS}
                        onChange={() => handleCardChange}
                    />
                </label>
            </div>
            <div className="card-err" role="alert">
                {error}
            </div>
            <div className="sub-btn">
                <button className="button is-info is-focused" type="submit">
                    Submit Payment
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
