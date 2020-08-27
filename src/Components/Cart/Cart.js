import React from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product)=> Number(total) + Number(product.price) ,0);
    const tax = Number(totalPrice)/ 20;
    const grandPrice = Number(totalPrice) + Number(tax);
    return (
               <div className='product-cart'>
            <h1> CART</h1>
            <p>Courses Ordered: {cart.length} </p>
            <p>Price: {totalPrice} </p>
            <p><small>tax: {tax} </small></p>
            <p>Total Price: {grandPrice} </p>
            <Button variant="success" size="lg">Order Now (Bootstrap)</Button>
        </div>
    );
};

export default Cart;