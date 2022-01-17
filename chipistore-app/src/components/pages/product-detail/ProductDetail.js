import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from '../../../context/products-context';
import Layout from '../../shared/Layout';
import './ProductDetail.css';
import { CartContext } from '../../../context/cart-context';
import { isItemInCart } from '../../../context/cart-reducer';

const ProductDetail = () => {
    const { products } = useContext(ProductContext);
    const { addToCart, cartItems, increaseQuantity } = useContext(CartContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(prod => prod.id === id)
    console.log('prod detail:', product);
    useEffect(() => {
        if (!product)
            navigate('/products')
    })

    const { image, name, description, price } = product;

    return (
        <Layout>
            <div className='prod-detail-container'>
                <div className='prod-img'>
                    <img src={image} alt='singleProd' />
                </div>
                <div className='prod-detail'>
                    <div>
                        <h3>{name}</h3>
                        <p>Price - ${price}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div className='add-to-cart-btn'>
                        {
                            !isItemInCart(product, cartItems) &&
                            <button
                                className='button is-link is-outlined nomad-btn'
                                id='btn-cart'
                                onClick={() => addToCart(product)}
                            >Add To Cart </button>
                        }
                        {
                            isItemInCart(product, cartItems) &&
                            <button
                                className='button is-link is-outlined  nomad-btn'
                                id='btn-cart'
                                onClick={() => increaseQuantity(product)}
                            >Add More </button>
                        }
                        <button
                            className='button is-black is-outlined  nomad-btn'
                            id='btn-cart'
                            onClick={() => { }}
                        >Proceed To Checkout </button>

                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default ProductDetail