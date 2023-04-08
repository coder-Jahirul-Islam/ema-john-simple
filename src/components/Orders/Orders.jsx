import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';


const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className="">
                <h2>Orders Page: {cart.length} </h2>
            </div>
            <div className="">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;