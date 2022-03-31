import React from 'react';
import "./Cart.css";

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-item">
                <div className="cart-image">
                    <img src="" alt="Product" />
                </div>
                <div className="cart-title">
                    <h5>hello</h5>
                </div>
            </div>
            <div className="cart-btn">
                <div className="">
                    <button className="btn btn-primary btn-cart"></button>
                </div>
                <div className="">
                    <button className="btn btn-primary btn-cart"></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;