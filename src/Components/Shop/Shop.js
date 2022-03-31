import React from 'react';
import Products from '../Products/Products';
import "./Shop.css";


const Shop = () => {
    return (
        <div className="Container">
            <div className="container-width">
                <div className="product-area">
                    <Products></Products>
                </div>
                <div className="cart-area">
                    <h2>Hi</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;