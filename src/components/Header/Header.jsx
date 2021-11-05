import React from 'react';
import { NavLink } from 'react-router-dom';
import hclass from './Header.module.css';

const Header = (props) => {
    return (
        <header className = {hclass.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg' alt="logo"></img>

            <div className={hclass.loginBlock}>
               { props.isAuth ? props.login
                    : <NavLink to={'/login/'}>Log in</NavLink>}
            </div>
        </header>
    );
}

export default Header;