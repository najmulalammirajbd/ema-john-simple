import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart);
    // const total = cart.reduce((total,prd) => total + prd.price , 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total  = total + product.price;
    }
    let shipping = 0;
    if (total > 100) {
        shipping = 0;
    }
    else if  (total > 5){
            shipping = 4;
    }
    const tex = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tex)).toFixed(2)
    return (
        <div>
            <h4>Auder Summary</h4>
            <p>Items Order:{cart.length}</p>
            <p><small>Shipping{shipping}</small></p>
            <p><small>tex : {tex}</small></p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;