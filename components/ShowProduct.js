import React from 'react'
import { useSelector } from 'react-redux';


const ShowProduct = () => {

    const { title, price } = useSelector(state => state.product);

    return (
        <div>
            <h1>Show Product</h1>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
        </div>
    )
}

export default ShowProduct