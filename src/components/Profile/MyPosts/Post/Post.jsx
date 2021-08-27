import React from 'react';
import pclass from "./Post.module.css";

const Post = () => {
    return (
        <div className={pclass.item}>
            <img src="https://s.abcnews.com/images/Business/abc_wnn_avatar_100127_wg.jpg"></img>
            post 1
            <div>
                <span>Like</span>
                </div>
            <span>dislike</span>
        </div>
    );
}

export default Post;