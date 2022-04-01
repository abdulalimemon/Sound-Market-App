import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Question from '../Question/Question';
import RandomOne from '../RandomOne/RandomOne';
import "./Shop.css";


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomOne, setRandomOne] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const clearCart = () => {
        const emptyCart = [];
        setCart(emptyCart);
    }

    const selectOne = () => {
        const oneRandomItem = cart[Math.floor(Math.random() * cart.length)];
        const oneChosenItem = { ...oneRandomItem };
        setRandomOne(oneChosenItem);
    }

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="container-width">
                    <div className="cart-area">
                        <div className="cart">
                            <Cart cart={cart} clearCart={clearCart} selectOne={selectOne}></Cart>
                            <RandomOne randomOne={randomOne}></RandomOne>
                        </div>
                    </div>
                    <div className="product-area">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                products.map(product => <Products product={product} key={product.id} addToCart={addToCart}></Products>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Question></Question>
        </div>
    );
};

export default Shop;