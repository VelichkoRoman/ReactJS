import React from 'react';
import { connect } from 'react-redux';
// import s from './Dialogs.module.css';
// import Message from './Message/Message';
// import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

// const DialogsContainer = () => {
//     // debugger;    

//     return (
//         <StoreContext.Consumer>
//             { store => {
//                         let state = store.getState().dialogsPage;

//                         // let dialogsElements = state.dialogs.map(d => <DialogItem ava={d.avatar} name={d.name} id={d.id} />)
//                         // let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />)
//                         // let newMessageBody = state.newMessageBody;

//                         let onSendMessageClick = () => {
//                             store.dispatch(sendMessageCreator());
//                         }
                        
//                         let onNewMessageChange = (body) => {
//                             store.dispatch(updateNewMessageBodyCreator(body));
//                         }

//                         return (
//                             <Dialogs sendMessage = {onSendMessageClick} 
//                                      updateNewMessageBody = {onNewMessageChange}
//                                      dialogsPage = {state}/>
//                         )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;