import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    // debugger;
    
    
    return (

        <div className={s.user + ' ' + s.dialog + ' ' + s.active}>
            <img src={props.ava} alt="" className={s.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;