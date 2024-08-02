import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header>
        <Link to="/" className='header-logo'><h1>Chef AI</h1></Link>
        <nav>
            <a href="/">Home</a>
            <a href="/recipes">Recipes</a>
            <a href="/create-recipe">Create Recipe</a>
            <a href="/articles">Articles</a>
        </nav>
    </header>
);

export default Header;
