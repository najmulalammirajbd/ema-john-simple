import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="Header">
            <nav>
                <Navbar></Navbar>
            </nav>
        </div>
    );
};

export default Header;