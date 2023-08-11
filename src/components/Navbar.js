import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {


    const items = useSelector((state) => state.cart);

   
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo font-bold">PRODUCT STORE</span>
            <div>
                <Link className="navLink font-bold"  to="/">
                    Home
                </Link>
                <Link className="navLink font-bold" to="/cart">
                    Cart
                </Link>

                
                <Link className="navLink font-bold" to="/logout">
                    Logout
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;