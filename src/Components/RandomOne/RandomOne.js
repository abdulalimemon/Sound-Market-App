import React from 'react';
import "./RandomOne.css";

const RandomOne = (props) => {
    const {randomOne} = props;
    const {picture, name} = randomOne;
    return (
        <div className="random-cart my-3">
            <div className="cart-item py-2">
                <div className="cart-image">
                    <img src={picture} alt="" />
                </div>
                <div className="cart-title">
                    <h5>{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default RandomOne;