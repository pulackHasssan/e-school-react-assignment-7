import React from 'react';
import './Course.css';
import courses from '../../fakeCourse/FakeCourse';
import { useState } from 'react';
import ProductShop from '../ProductShop/ProductShop';
import Cart from '../Cart/Cart';

const Course = () => {
    const first15 = courses.slice(0, 15);
    const [products, setProducts] = useState(first15);
    const [cart, setCart] = useState([]) 
    const handleAddCourse = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
    <div className='course-container'>
            <div>
           {
                products.map(product => <ProductShop product={product} handleAddCourse={handleAddCourse}></ProductShop>)
           }
        </div>
      <div>
          <Cart cart={cart}></Cart>
      </div>
    </div>
       
    );
};

export default Course;