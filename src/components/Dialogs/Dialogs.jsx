import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
// import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    // debugger;
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem ava={d.avatar} name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)
    
    let newMessageBody = state.newMessageBody;

    // let avatarUser = props.state.dialogs.map( d => {
    //     return (
    //             <img src = { d.avatar } alt="" className={s.avatar}/>
    //     )
            
    // }) 
    // let newMessageElement = React.createRef();

    // let addMessage = () => {
    //     props.dispatch(addMessageActionCreator());
    // }

    // let onMessageChange = () =>{
    //     let text = newMessageElement.current.value;
    //     let action = updateNewMessageTextActionCreator(text);
    //     props.dispatch(action);
    // }

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    
    let onNewMessageChange = (e) => {
// debugger
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                    {/* {avatarUser} */}
                {dialogsElements}

            </div>
            <div className={s.messages}>
               <div>{messagesElements}</div>
            </div>
            {/* <div>
                <textarea onChange={onMessageChange} value={props.newMessageText}  ref = {newMessageElement} ></textarea>
            </div>
            <div>
                <button onClick = {addMessage} >Add posts</button>
            </div> */}
            <div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                <div><button onClick = {onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;