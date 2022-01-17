import React from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/cart-context';
import { isItemInCart } from '../../context/cart-reducer';
import './Featured-product.css'

const FeaturedProduct = (product) => {
    const navigate = useNavigate();
    const { name, image, price, id } = product;
    const { addToCart, cartItems, increaseQuantity } = React.useContext(CartContext)
    return (
        <div className='fed-product'>
            <div className='fed-img' onClick={() => navigate(`/products/${id}`)}>
                <img
                    alt='prod'
                    src={image}
                />
            </div>
            <div>
                <h3>{name}</h3>
                <p>${price}</p>
                {!isItemInCart(product, cartItems) &&
                    <button
                        className='button is-black is-hovered nomad-btn'
                        onClick={() => addToCart(product)}
                    >Add To Cart </button>
                }
                {isItemInCart(product, cartItems) &&
                    <button
                        className='button is-link is-outlined nomad-btn'
                        onClick={() => increaseQuantity(product)}
                    >Add More </button>
                }

            </div>
        </div>

    )
}

export default FeaturedProduct;
