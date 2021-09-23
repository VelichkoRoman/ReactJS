import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import pclass from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
// debugger;
    let postItems = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount} textLikes='likes' /> )

    let newPostElement = React.createRef();

    let addPost = () => {
        // debugger;
    //    props.addPost();
       props.dispatch(addPostActionCreator());
        
    }   

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
        // props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text}); - то же самое что и предыдущие 2 строки

    }

    return (
        <div className = {pclass.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref= {newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add posts</button>
                </div>
            </div>
            <div className={pclass.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;