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
                <button>Remove</button>
            </div>
            <div className={pclass.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;