import React, { useContext } from 'react';
import Layout from '../../shared/Layout'
import FeaturedProduct from '../../shared/Featured-product';
import { ProductContext } from '../../../context/products-context';
import './Products.css'

const Products = () => {
    const { products } = useContext(ProductContext);
    const [searchValue, setSearchValue] = React.useState('');
    if (!products.length) {
        return <h3>No Products Available</h3>
    }

    const allProducts = products.filter((prod) => {
        if (searchValue === '') {
            return prod;
        } else if (prod.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return prod;
        }
    }).map((prod) => (<FeaturedProduct {...prod} key={prod.id} />))
    return (
        <Layout>
            <div className='field has-addons'>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Find a product'
                        autoComplete='off'
                        onChange={e => setSearchValue(e.target.value)}
                    />
                </div>
            </div>
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