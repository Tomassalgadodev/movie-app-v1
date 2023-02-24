import React from 'react';
import logo from '../assets/logo-placeholder.png';
import './Header.css';

const Header = ({ showHomePage }) => {
    return (
        <header>
            <img className='logo' onClick={() => showHomePage()} src={logo}/>
            <h1 className='main-heading'>MOVIE APP</h1>
            <button className='sign-in-button'>SIGN IN</button>
            <input className='search-bar' type='text' placeholder='Search for a movie'/>
        </header>
    )
}

export default Header;