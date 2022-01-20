import React, { useState } from 'react';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { v3 as uuidv4 } from 'uuid';
import S3BucketConfig from '../../../aws-exports';
import { createProduct } from '../../../graphql/mutations';
import './Add.css'

const Add = () => {
    const { aws_user_files_s3_bucket: bucket, aws_user_files_s3_bucket_region: region } = S3BucketConfig;
    // const [checkFeatured, setCheckFeatured] = useState(false)
    const [image, setImage] = useState(null);
    const initialProdDetail = { name: '', description: '', image: '', price: '' }
    const [productDetail, setProductDetail] = React.useState(initialProdDetail);

    const handleSubmitEvent = async (e) => {
        e.preventDefault();
        try {
            if (!productDetail.name || !productDetail.price) return
            await API.graphql(graphqlOperation(createProduct, { input: productDetail }))
            setProductDetail({ name: "", description: "", image: "", price: "" })
            console.log('new product added:', productDetail)
        } catch (err) {
            console.log('error creating new product:', err)
        }
    }
    const onValueChange = (e) => {
        setProductDetail({ ...productDetail, [e.target.name]: e.target.value })
    }
    const uploadImageEvent = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log('uploaded image:', file);
        //create uniuqe image with random id
        const imageName = file.name.split(".")[0];
        const imageType = file.name.split(".")[1];
        const fileName = `images/${uuidv4()}${imageName}.${imageType}`;
        const imageUrl = `https://${bucket}.s3.${region}.amazonaws.com/public/${fileName}`

        try {
            await Storage.put(fileName, file, {
                level: 'public',
                contentType: file.type
            });
            const image = await Storage.get(fileName, { level: 'public' })
            setImage(image);
            setProductDetail({ ...productDetail, image: imageUrl });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='admin-container'>
            <AmplifyAuthenticator>
                <div>
                    <header className='add-header'>
                        <h3>Add New Product</h3>

                    </header>
                    <form className='form-container' onSubmit={handleSubmitEvent}>
                        <div className='form-img'>
                            {image ? <img className='uploaded-img' src={image} alt='' /> :
                                <input
                                    type='file'
                                    accept='image/png'
                                    onChange={(e) => uploadImageEvent(e)}
                                />
                            }

                        </div>
                        <div className='form-details'>
                            <div className='form-name'>
                                <label htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter the product name'
                                    name='name'
                                    required
                                    onChange={onValueChange}
                                />
                            </div>
                            <div className='form-description'>
                                <label htmlFor='description'>Description</label>
                                <textarea
                                    type='text'
                                    placeholder='Enter the product decription'
                                    name='description'
                                    required
                                    onChange={onValueChange}
                                />
                            </div>
                            <div className='form-price'>
                                <label htmlFor='price'>Price</label>
                                <input
                                    type='text'
                                    placeholder='Price of the product in USD'
                                    name='price'
                                    required
                                    onChange={onValueChange}
                                />
                            </div>
                            <div className='form-featured'>
                                <label>Featured?</label>
                                <input
                                    className='checkbox'
                                    type='checkbox'
                                    value={productDetail.featured}
                                    onChange={(e) => setProductDetail({ ...productDetail, featured: !productDetail.featured })}
                                />
                            </div>
                            <div className='form-submit'>
                                <button className='btn-submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </AmplifyAuthenticator>

        </div>
    )
}

export default Add;