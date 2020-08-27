import React from 'react';
import Course from '../../fakeData/course.js';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart);
    const total = cart.reduce((total , course)=> total + course.price,0);
    
    return (
        <div>
            <h4>Course Total Price</h4>
            <p>Total Course Orders:{cart.length}</p>
            <p>Total Price : {total}</p>
        </div>
    );
};

export default Cart;