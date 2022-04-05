import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='headerBox'>
           <h1> COCa Cola</h1>
            <nav className='headerText'>
                <Link to="/">Home</Link>
                <Link to="/revews">Revews</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/dashbord">Dashbord</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;