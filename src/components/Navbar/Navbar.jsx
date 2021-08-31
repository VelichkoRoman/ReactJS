import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";

console.log(classes)

const Navbar = () => {
    return (
        <nav className = { classes.nav }>
            <div className = { classes.item }>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className = {`${classes.item} ${classes.active}` }>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className = { classes.item }>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className = { classes.item }>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className = { classes.item }>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;