import React from 'react';
import hclass from './Header.module.css';

const Header = () => {
    return (
        <header className = {hclass.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg' alt="logo"></img>
        </header>
    );
}

export default Header;