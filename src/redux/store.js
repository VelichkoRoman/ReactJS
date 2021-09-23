import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// // const ADD_MESSAGE = 'ADD-MESSAGE';
// // const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, it's first message from react app", likesCount: 16},
                {id: 2, message: 'New user catch', likesCount: 3},
                {id: 3, message: 'I see u', likesCount: 5},
                {id: 4, message: 'whassup men', likesCount: 1},
                {id: 5, message: 'Woww', likesCount: 35},
            ],
            newPostText: 'Romich',
            
        },
        dialogsPage: {
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
            newMessageBody:''
        },
        sideBar: 
        // { 
            // friends: [
            //     {id: 1, name: 'Alex'},
            //     {id: 2, name: 'Alla'},
            //     {id: 3, name: 'Liz'},
            // ],
            // avatar: [
               [{ id: 1, nickname: 'Liz', photo: require("../img/woman.svg").default },
                { id: 2, nickname: 'Alla',photo: require("../img/girl.svg").default },
                { id: 3, nickname: 'Alex',photo: require("../img/man.svg").default },]
            // ],
        // },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        // debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        // debugger;

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
       
        this._callSubscriber(this._state);


        // if (action.type === ADD_POST){
        //     // debugger;
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount:0,
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);

        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);


        // } else if (action.type === ADD_MESSAGE){
        //     // debugger;
        //     let newMessage = {
        //         id: 6,
        //         message: this._state.dialogsPage.newPostDialogsText,
        //     };
        //     this._state.dialogsPage.messages.push(newMessage);
        //     this._state.dialogsPage.newPostDialogsText = '';
        //     this._callSubscriber(this._state);

        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.dialogsPage.newPostDialogsText = action.newMessage;
        //     this._callSubscriber(this._state);


        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber(this._state);

        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messages.push({id:6, message: body});
        //     this._callSubscriber(this._state);
        // }


    },

}

// export const addPostActionCreator = () => ({type: ADD_POST});
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
// // export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
// // export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

// export const sendMessageCreator = () => ({type: SEND_MESSAGE});
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});



export default store;
window.store = store;

