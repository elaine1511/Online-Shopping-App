import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CartSingleItem = (product) => {
    const { name, image, price, quantity } = product;
    return (
        <div>
            <div>
                <img src={image} alt="single-item" />
            </div>
            <div className="name-price">
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <div className="quantity">
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <button>FiChevronUp</button>

                <button>FiChevronDown</button>
            </div>

        </div>
    )
}

export default CartSingleItem;