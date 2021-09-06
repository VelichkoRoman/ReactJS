import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Romich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Anna'},
    ]
    
    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Куку'},
        {id: 4, message: 'Чо происходит?'},
        {id: 5, message: 'Сегодня 1сентября'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map (m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                 */}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/* <Message message={messagessData[0].message} />
                <Message message={messagessData[1].message} />
                <Message message={messagessData[2].message} />
                 */}
            </div>
        </div>
    )
}

export default Dialogs;