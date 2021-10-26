const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
        posts: [
            {id: 1, message: "Hi, it's first message from react app", likesCount: 16},
            {id: 2, message: 'New user catch', likesCount: 3},
            {id: 3, message: 'I see u', likesCount: 5},
            {id: 4, message: 'whassup men', likesCount: 1},
            {id: 5, message: 'Woww', likesCount: 35},
        ],
        newPostText: 'Romich',
        profile: null
};

const profileReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount:0,
            };

            return {...state, posts:[...state.posts, newPost],newPostText:''};
            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;
        };
        case UPDATE_NEW_POST_TEXT: {

            return {...state, newPostText: action.newText};
            // let stateCopy = {...state};
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
        }

        case SET_USER_PROFILE: {

            return {...state, profile: action.profile}
        }
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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default profileReducer;