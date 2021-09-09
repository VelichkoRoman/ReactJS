import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    // debugger;
    return (
        
        <div className={s.message}>
            {props.message}
        </div>
    );
}

export default Message;