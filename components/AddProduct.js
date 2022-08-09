import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../features/productSlice';

const AddProduct = () => {

    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState('');

    const dispatch = useDispatch();

    const updateProduct = (e) => {
        e.preventDefault();

        dispatch(update({title, price}));

    }

    return (
        <div>
            <h1>Add Product</h1>

            <form onSubmit={updateProduct}>

                <label>Title</label>
                <br />
                <input 
                    className='input'
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <br />

                <label>Price</label>
                <br />
                <input 
                    className='input' 
                    type='text' 
                    placeholder='Price' 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}

                    />
                <br />

                
                <button>Submit</button>

            </form>
        </div>
    )
}

export default AddProduct