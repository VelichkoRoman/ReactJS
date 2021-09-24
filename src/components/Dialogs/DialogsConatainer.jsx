import React from 'react';
// import s from './Dialogs.module.css';
// import Message from './Message/Message';
// import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    // debugger;
    let state = props.store.getState().dialogsPage;

    // let dialogsElements = state.dialogs.map(d => <DialogItem ava={d.avatar} name={d.name} id={d.id} />)
    // let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />)
    // let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs sendMessage = {onSendMessageClick} 
                 updateNewMessageBody = {onNewMessageChange}
                 dialogsPage = {state}/>
    )
}

export default DialogsContainer;