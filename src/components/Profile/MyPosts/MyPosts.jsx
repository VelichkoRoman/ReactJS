import React from 'react';
import pclass from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add posts</button>
            </div>
            <div className={pclass.posts}>
                <Post message="Hi, it's first message from react app" countLike="16" />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;