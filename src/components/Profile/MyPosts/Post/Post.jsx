import React from 'react';
import pclass from "./Post.module.css";

const Post = (props) => {
// debugger;
    return (
        <div className={pclass.item}>
            <img src="https://s.abcnews.com/images/Business/abc_wnn_avatar_100127_wg.jpg"></img>
            { props.message }
            <div>
                <span>{ props.countLike } Likes</span>
            </div>
        </div>
    );
}

export default Post;