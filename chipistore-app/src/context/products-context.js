import React, { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAllProducts();
    }, [])

    const fetchAllProducts = async () => {
        setLoading(true);
        try {
            const result = await API.graphql({
                query: queries.listProducts,
                authMode: "API_KEY" //switch authMode for public access
            })
            console.log('result from API graphQL:', result);
            const allProducts = result.data.listProducts.items;
            console.log('all product:', allProducts);
            const featuredProd = allProducts.filter(prod => {
                return prod.featured === true;
            })
            console.log('featured prods:', featuredProd);
            setProducts(allProducts);
            setFeatured(featuredProd);
            setLoading(false)
        } catch (e) {
            console.error('Failed fetching products:', e);
        }
    }

    return (
        <ProductContext.Provider value={{ products, featured, loading }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductContextProvider };
