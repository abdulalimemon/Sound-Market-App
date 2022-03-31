import React from 'react';
import "./Products.css";


const Products = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="Headphones"/>
                        <div className ="card-body">
                        <h5 className ="card-title">Name</h5>
                        <h6 className ="card-title">Price : $</h6>
                        </div>
                        <div className ="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;