import React from 'react';
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <header>
            <div className="logo">PizzaTown</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </header>
    );
};

export default NavBar;
