import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    // debugger;
    let dialogsElements = props.state.dialogs.map(d => <DialogItem ava={d.avatar} name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    let avatarUser = props.state.dialogs.map( d => {
        return (
                <img src = { d.avatar } alt="" className={s.avatar}/>
        )
            
    }) 

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.updateNewMessageText();
    }

    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                    {/* {avatarUser} */}
                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>
            <div>
                <textarea onChange={onMessageChange} value={props.newMessageText}  ref = {newMessageElement} ></textarea>
            </div>
            <div>
                <button onClick = {addMessage} >Add posts</button>
            </div>
        </div>
    )
}

export default Dialogs;