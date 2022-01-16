import React from 'react';
import Layout from './shared/Layout';
import Hero from './hero/Hero';
import FeaturedCollection from './featured-collection/Featured-collection';


const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <FeaturedCollection />
            </Layout>
        </>
    )
}

export default Home
