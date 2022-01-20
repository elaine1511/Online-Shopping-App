import React, { useState } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from 'react/cjs/react.development';
import { listProducts } from '../../../graphql/queries';

const View = () => {
    const [inventory, setInventory] = useState([]);
    const [currentProd, setCurrentProd] = useState({});
    const [editingIndex, setEdditingIndex] = useState([]);

    useEffect(() => {
        fetchAllProducts();
    }, [])

    const fetchAllProducts = async () => {
        try {
            const result = await API.graphql(graphqlOperation(listProducts));
            const inventory = result.data.listProducts.items;
            console.log('inventory:', inventory);
            setInventory(inventory)
        } catch (e) {
            console.error('Failed fetching products:', e);
        }

    }

    const updateProduct = async (prod, index) => {
        const editingIndex = index;
        setEdditingIndex(editingIndex);
        setCurrentProd(prod)

    }
    const deleteProduct = async (index) => {
        const prodToDelete = inventory[index];
        try {
            await API.graphql(graphqlOperation(deleteProduct, { input: { id: prodToDelete.id } }))
            const newInventory = [...inventory.slice(0, index), ...inventory.slice(index + 1)]
            setInventory(newInventory)
        } catch (e) {
            console.error('Failed deleteing product:', e);
        }

    }
    const saveProduct = async (index) => {
        const newInventory = [...inventory];
        newInventory[index] = currentProd;
        try {
            const result = await API.graphql(graphqlOperation(updateProduct, { input: newInventory[index] }));
            console.log('result from API graphQL:', result);
            setEdditingIndex(null);
            setInventory(newInventory);
        } catch (e) {
            console.error('Failed saving product:', e);
        }

    }

    const onChangeEvent = async (e) => {
        setCurrentProd({ ...currentProd, [e.target.name]: e.target.value })
    }
    if (!inventory.lenghth) {
        <h3>There is no products in inventory</h3>
    }
    return (
        <div>

            {
                inventory.map((item, index) => {
                    const isEditing = editingIndex === index
                    if (isEditing) {
                        return (
                            <div key={item.id}>
                                <div >
                                    <img src={item.image} alt='' />
                                    <input
                                        onChange={(e) => onChangeEvent(e, index)}
                                        className=""
                                        value={currentProd.name}
                                        placeholder="Name"
                                        name="name"
                                    />
                                    <div className="">
                                        <input
                                            onChange={() => onChangeEvent}
                                            className=""
                                            value={currentProd.description}
                                            name="description"
                                            placeholder="Description"
                                        />
                                        <input
                                            onChange={() => onChangeEvent}
                                            className=""
                                            value={currentProd.price}
                                            name="price"
                                            placeholder="Price"
                                        />
                                        <label>Featured:</label>
                                        <input
                                            className='checkbox'
                                            type='checkbox'
                                            value={currentProd.featured}
                                            onChange={(e) => setCurrentProd({ ...inventory, featured: !currentProd.featured })}
                                        />
                                    </div>
                                    <div>
                                        <button className='button' onClick={() => saveProduct(index)}>Save</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div className="" key={item.id}>
                            <div className="">
                                <img className="" src={item.image} alt='' />
                                <p className="">
                                    Name: {item.name}
                                </p>
                                <div>
                                    <p className="">
                                        Description: {item.description}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Price: $ {item.price}
                                    </p>
                                </div>
                                <div className="">
                                    <button className='button' onClick={() => deleteProduct(index)}><FaRegTrashAlt /></button>
                                    <button className='button' onClick={() => updateProduct(item, index)}>Edit</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default View;
