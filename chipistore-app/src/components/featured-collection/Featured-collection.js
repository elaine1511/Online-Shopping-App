import React, { useContext } from 'react';
import FeaturedProduct from '../shared/Featured-product'
import { ProductContext } from '../../context/products-context'
import './Featured-collection.css'

const FeaturedProdCollection = () => {
    const { featured } = useContext(ProductContext);
    if (!featured.length) {
        return <h3>No Featured Products</h3>
    }
    const featuredProducts = featured.map(featuredProd => (
        <FeaturedProduct {...featuredProd} key={featuredProd.id} />
    ))
    return (
        <div className='fed-collection container'>
            <h2 className='fed-collection-title'>Featured Collection</h2>
            <div className='fed-prods'>
                {
                    featuredProducts
                }
            </div>
        </div>
    )
}

export default FeaturedProdCollection;