import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from '../../../context/products-context';
import Layout from '../../shared/Layout';
import './ProductDetail.css';

const ProductDetail = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(prod => prod.id === id)
    console.log('prod detail:', products)
    useEffect(() => {

        if (!product)
            navigate('/products')
    }
    )
    const { image, name, description, price } = product;

    return (
        <Layout>
            <div className='prod-detail-container'>
                <div className='prod-img'>
                    <img src={image} alt='singleProd' />
                </div>
                <div className='prod-detail'>
                    <div className='name-price'>
                        <h3>{name}</h3>
                        <p>Price - ${price}</p>
                    </div>
                    <div className='prod-des'>
                        <p>{description}</p>
                    </div>
                    <div className='add-to-cart btn'>
                        <button className='button is-warning nomad-btn' id='btn-outline'>Add To Cart </button>
                        <button className='button is-black nomad-btn' id='bttn-outline'>Proceed To Checkout </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetail