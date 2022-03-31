import React from 'react';
import "./Products.css";


const Products = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="...">
                        <div className ="card-body">
                        <h5 className ="card-title">Card title</h5>
                        <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className ="card-footer">
                        <small className ="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;