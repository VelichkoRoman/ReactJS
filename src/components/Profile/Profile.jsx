import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import pclass from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div>
               <img src='https://toursbooked.com/sites/default/files/product_image/IMG-world-novo-cinema-dubai_0.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;