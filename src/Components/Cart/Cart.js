import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;


    
    return (
        <div className="cart">
            {
                cart.slice(0,4).map(product => <CartItem picture={product.picture} name={product.name}></CartItem>)
            }

            <div className="cart-btn">
                <div className="">
                    <button className="btn btn-primary btn-cart">Select One</button>
                </div>
                <div className="cart-btn">
                    <button className="btn btn-primary btn-cart">Clear Cart<span className="btn-icon"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span></button>
                </div>
            </div>
        </div>
    );
};

function CartItem(props) {
    return (
        <div className="cart-item py-2">
            <div className="cart-image">
                <img src={props.picture} alt="Product" />
            </div>
            <div className="cart-title">
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}



export default Cart;