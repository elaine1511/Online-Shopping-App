import React from 'react';
import { Link } from 'react-router-dom';
import './Featured-product.css'

const FeaturedProduct = (featuredProd) => {
    const { name, image, price, id } = featuredProd;
    return (
        <div className='fed-product'>
            <div className='fed-img'>
                <Link to={`products/${id}`}> <img
                    alt='prod'
                    src={image}
                /></Link>
            </div>
            <div className='name-price'>
                <h3>{name}</h3>
                <p>${price}</p>
                <button className='button is-warning nomad-btn'>Add To Cart </button>
            </div>
        </div>

    )
}

export default FeaturedProduct;
