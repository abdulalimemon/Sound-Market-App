import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Products.css";


const Products = (props) => {
    const { product } = props;
    const { name, id, price, picture } = product;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top py-3" alt="Headphones" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-title">Price : {price}</h6>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary btn-cart">Add to Cart <span className="btn-icon"> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;