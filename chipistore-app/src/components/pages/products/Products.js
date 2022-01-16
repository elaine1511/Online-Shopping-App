import React, { useContext } from 'react';
import Layout from '../../shared/Layout'
import FeaturedProduct from '../../shared/Featured-product';
import { ProductContext } from '../../../context/products-context';
import './Products.css'

const Products = () => {
    const { products } = useContext(ProductContext);
    const allProducts = products.map(prod => (
        <FeaturedProduct {...prod} key={prod.id} />
    ))
    return (
        <Layout>
            <div className='prod-list-container'>
                <h2 className='prod-list-title'>All Products</h2>
                <div className='prod-list'>
                    {allProducts}
                </div>
            </div>
        </Layout>
    )
}

export default Products