import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";              

const Navbar = (props) => {
    // debugger;

    const photoAvatarElements = props.state.sideBar.ava.map( s => {
        return (
            <div>  
                <div className = { classes.photo }>
                    <img src = { s.photo } alt="" />
                </div>
                <div>
                    <p className={classes.nickname}>{s.nickname}</p>
                </div>
            </div>
        )
            
    }) 

    return (
        <nav className = { classes.nav }>
            <div className = { classes.item }>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className = { classes.item }>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className = { classes.item }>
                <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className = { classes.item }>
                <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className = { classes.item }>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
           


            <p>Friends: </p>
            <div className={classes.photoAvatarElements}>
                {photoAvatarElements}
            </div>
        </nav>
    );
}

export default Navbar;