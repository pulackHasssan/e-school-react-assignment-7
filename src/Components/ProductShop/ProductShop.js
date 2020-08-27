import React from 'react';
import './ProductShop.css'

const ProductShop = (props) => {
    const { title, price, instructor, img } = props.product;

    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div >
                <h2 >{title}</h2>
                <p><small>by: {instructor}</small></p>
                <p>Price: $ {price}</p>
                <button onClick={() => props.handleAddCourse(props.product)}>Enroll Now</button>
            </div>
          
        </div>
    );
};

export default ProductShop;