import React from "react";
import { CartContext } from "../../../context/cart-context";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Layout from "../../shared/Layout";
import "./Cart.css";

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, itemQuantity, totalAmount, increaseQuantity, decreaseQuantity, deleteProd, clearCart } =
        React.useContext(CartContext);

    return (
        <Layout>
            <>
                <header>
                    <h1>Cart</h1>
                </header>

                {cartItems.length === 0 ? (
                    <h3>Your Cart is empty</h3>
                ) : (
                    <>
                        <div className="cart">
                            <div className="cart-single-item-container">
                                {cartItems.map((item) => (
                                    <article key={item.id} className="cart-item">
                                        <div className="cart-img">
                                            <img src={item.image} alt="cart" />
                                        </div>
                                        <div className="name-price">
                                            <h4>{item.name}</h4>
                                            <p>${item.price}</p>
                                        </div>
                                        <div>
                                            <p>Quantity:{item.quantity}</p>
                                        </div>
                                        <div className="btns-container">
                                            <button className="inc-btn" onClick={() => increaseQuantity(item)}>
                                                <FiChevronUp />
                                            </button>
                                            {item.quantity === 1 && (
                                                <button className="delete-btn" onClick={() => deleteProd(item)}>
                                                    <FaRegTrashAlt />
                                                </button>
                                            )}
                                            {item.quantity > 1 && (
                                                <button className="dec-btn" onClick={() => decreaseQuantity(item)}>
                                                    <FiChevronDown />
                                                </button>
                                            )}
                                        </div>
                                    </article>
                                ))}
                            </div>
                            <div className="total-wrapper">
                                <div className="total">
                                    <p>Total Items: {itemQuantity}</p>
                                    <p>Total Amount: ${totalAmount}</p>
                                </div>
                                <div className="checkout">
                                    <button
                                        className="button is-black"
                                        onClick={() => navigate("/checkout")}
                                    >
                                        Checkout
                                    </button>
                                    <button className="button is-danger is-outlined " onClick={() => clearCart()}>
                                        Empty Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                    </>
                )}
            </>
        </Layout>
    );
};

export default Cart;
