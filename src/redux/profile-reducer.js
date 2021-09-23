const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: "Hi, it's first message from react app", likesCount: 16},
            {id: 2, message: 'New user catch', likesCount: 3},
            {id: 3, message: 'I see u', likesCount: 5},
            {id: 4, message: 'whassup men', likesCount: 1},
            {id: 5, message: 'Woww', likesCount: 35},
        ],
        newPostText: 'Romich'
};

const profileReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount:0,
            };
            state.posts.push(newPost);
            state   .newPostText = '';

            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


//     if (action.type === ADD_POST){
//         // debugger;
//         let newPost = {
//             id: 5,
//             message: state.newPostText,
//             likesCount:0,
//         };
//         state.posts.push(newPost);
//         state   .newPostText = '';
        

//     } else if (action.type === UPDATE_NEW_POST_TEXT) {
//         state.newPostText = action.newText;
//     }

//     return state;
// };

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;