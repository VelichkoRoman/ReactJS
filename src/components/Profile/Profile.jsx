import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import pclass from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    // debugger
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer 
                            //   posts={props.profilePage.posts} 
                            //   newPostText = {props.profilePage.newPostText}
                            //   dispatch={props.dispatch}
                     />
        </div>
    )
}

export default Profile;