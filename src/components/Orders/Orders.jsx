import React, { useState } from 'react';
import Cart from '../Cart/Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeItem } from 'localforage';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    // console.log(savedCart);
    const handlerRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handlerRemoveFromCart={handlerRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >

                    <Link className='proceed-link' to='/checkout'>
                        <button className='btn-proceed'>Checkout
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;