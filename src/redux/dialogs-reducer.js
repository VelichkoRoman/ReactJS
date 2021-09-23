const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogs: [
            {id: 1, name: 'Romich', avatar: require("../img/man.svg").default},
            {id: 2, name: 'Andrey', avatar: require("../img/man.svg").default},
            {id: 3, name: 'Sveta', avatar: require("../img/woman.svg").default },
            {id: 4, name: 'Anton', avatar: require("../img/man.svg").default},
            {id: 5, name: 'Anna', avatar: require("../img/girl.svg").default},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'Как дела?'},
            {id: 3, message: 'Куку'},
            {id: 4, message: 'Чо происходит?'},
            {id: 5, message: 'Сегодня 1сентября'},
        ],
        // newPostDialogsText: 'RomichDialog',
        newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:6, message: body});
            
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            
            return state;

        default:
            return state;
    }

    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //    state.newMessageBody = action.body;

    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = '';
    //     state.messages.push({id:6, message: body});
    // }
    
    // return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});



export default dialogsReducer;