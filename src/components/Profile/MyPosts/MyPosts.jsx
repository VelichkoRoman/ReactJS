import React from 'react';
import pclass from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

    let postItems = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount} textLikes='likes' /> )

    return (
        <div className = {pclass.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea value="Types something"></textarea>
                </div>
                <div>
                    <button>Add posts</button>
                </div>
            </div>
            <div className={pclass.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;