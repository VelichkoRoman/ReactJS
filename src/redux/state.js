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
            newPostDialogsText: 'RomichDialog',
    
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
    // addPost() {
    //     debugger;
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount:0,
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newtext) {
    //     // debugger;
    //     this._state.profilePage.newPostText = newtext;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        // debugger;
        if (action.type === 'ADD-POST'){
            // debugger;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount:0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    },
    addMessage() {
        // debugger;
        let newMessage = {
            message: this._state.dialogsPage.messages.newPostDialogsText,
        };
        this._state.dialogsPage.posts.push(newMessage);
        this._state.dialogsPage.newPostDialogsText='';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newmessage) {
        // debugger;
        this._state.dialogsPage.newPostDialogsText = newmessage;
        this._callSubscriber(this._state);
    }

}



// let rerenderEntireTree = () => {
//     console.log('State changed');
// }

// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, it's first message from react app", likesCount: 16},
//             {id: 2, message: 'New user catch', likesCount: 3},
//             {id: 3, message: 'I see u', likesCount: 5},
//             {id: 4, message: 'whassup men', likesCount: 1},
//             {id: 5, message: 'Woww', likesCount: 35},
//         ],
//         newPostText: 'Romich',
        
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Romich', avatar: require("../img/man.svg").default},
//             {id: 2, name: 'Andrey', avatar: require("../img/man.svg").default},
//             {id: 3, name: 'Sveta', avatar: require("../img/woman.svg").default },
//             {id: 4, name: 'Anton', avatar: require("../img/man.svg").default},
//             {id: 5, name: 'Anna', avatar: require("../img/girl.svg").default},
//         ],
//         messages: [
//             {id: 1, message: 'hi'},
//             {id: 2, message: 'Как дела?'},
//             {id: 3, message: 'Куку'},
//             {id: 4, message: 'Чо происходит?'},
//             {id: 5, message: 'Сегодня 1сентября'},
//         ],
//         newPostDialogsText: 'RomichDialog',

//     },
//     sideBar: 
//     // { 
//         // friends: [
//         //     {id: 1, name: 'Alex'},
//         //     {id: 2, name: 'Alla'},
//         //     {id: 3, name: 'Liz'},
//         // ],
//         // avatar: [
//            [{ id: 1, nickname: 'Liz', photo: require("../img/woman.svg").default },
//             { id: 2, nickname: 'Alla',photo: require("../img/girl.svg").default },
//             { id: 3, nickname: 'Alex',photo: require("../img/man.svg").default },]
//         // ],
//     // },
// };

// window.state=state;

// export let addPost = () => {
//     // debugger;
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount:0,
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText='';
//     rerenderEntireTree(state);
// }

// export let updateNewPostText = (newtext) => {
//     // debugger;
//     state.profilePage.newPostText = newtext;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

// export let addMessage = () => {
//     // debugger;
//     let newMessage = {
//         message: state.dialogsPage.messages.newPostDialogsText,
//     };
//     state.dialogsPage.posts.push(newMessage);
//     state.dialogsPage.newPostDialogsText='';
//     rerenderEntireTree(state);
// }

// export let updateNewMessageText = (newmessage) => {
//     // debugger;
//     state.dialogsPage.newPostDialogsText = newmessage;
//     rerenderEntireTree(state);
// }

// export default state;
export default store;
window.store = store;

