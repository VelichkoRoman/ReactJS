import React from 'react';
import pclass from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: "Hi, it's first message from react app", likesCount: 16},
        {id: 2, message: 'New user catch', likesCount: 3},
        {id: 3, message: 'I see u', likesCount: 5},
        {id: 4, message: 'whassup men', likesCount: 1},
        {id: 5, message: 'Woww', likesCount: 35},

    ]

    let postItems = posts.map (p => <Post message={p.message} likesCount={p.likesCount} textLikes='likes' /> )

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