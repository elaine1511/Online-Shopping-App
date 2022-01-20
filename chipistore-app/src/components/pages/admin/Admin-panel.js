
import React, { useState } from 'react'
import Layout from '../../shared/Layout';
import Add from './Add';
import View from './View';

const AmindPanel = () => {
    const [viewState, setViewState] = useState('view');

    const toggleViewState = (viewState) => {
        setViewState(viewState)
    }
    return (
        <Layout>
            <div>
                <div style={{ color: 'black', display: 'flex' }}>
                    <button className='button' onClick={() => toggleViewState('view')}>View Products</button>
                    <button className='button' onClick={() => toggleViewState('add')}>Add New Product</button>
                </div>
                {
                    viewState === 'view' ? <View /> : <Add />
                }
            </div>
        </Layout>
    )
}

export default AmindPanel;
