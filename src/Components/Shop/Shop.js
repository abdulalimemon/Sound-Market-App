import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import "./Shop.css";


const Shop = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="container-width">
                    <div className="product-area">
                        <Products></Products>
                    </div>
                    <div className="cart-area">
                        <h2>Hi</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;