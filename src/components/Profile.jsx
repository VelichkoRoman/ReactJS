import React from 'react';
import pclass from "./Profile.module.css";

const Profile = () => {
    return (
        <div className = { pclass.content }>
            <img src='https://toursbooked.com/sites/default/files/product_image/IMG-world-novo-cinema-dubai_0.jpg'></img>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className = { pclass.posts }>
                    <div className = { pclass.item }>
                        post 1
                    </div>
                    <div className = { pclass.item }>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;