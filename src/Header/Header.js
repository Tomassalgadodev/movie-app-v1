import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-placeholder.png';
import './Header.css';

const Header = ({ setBackgroundImage, currentMovie }) => {
    return (
        <header>
            <Link to="/">
                <img onClick={() => setBackgroundImage(currentMovie.backdrop_path , false)} className='logo' src={logo}/>
            </Link>
            <h1 className='main-heading'>MOVIE APP</h1>
            <button className='sign-in-button'>SIGN IN</button>
            <input className='search-bar' type='text' placeholder='Search for a movie'/>
        </header>
    )
}

export default Header;