import React from 'react'
import Layout from './shared/Layout'

const NotFoundPage = () => {
    const style = {
        textAlign: 'center',
        fontSize: '1.1rem',
        padding: '2rem',
        color: 'black'
    }
    return (
        <Layout>
            <p style={style}>Sorry, we can't find that page</p>
        </Layout>
    )
}

export default NotFoundPage