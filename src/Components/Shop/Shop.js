import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Products from '../Products/Products';
import "./Shop.css";


const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="container-width">
                    <div className="cart-area">
                        <Cart></Cart>
                    </div>
                    <div className="product-area">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                products.map(product => <Products product={product} key={product.id}></Products>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;