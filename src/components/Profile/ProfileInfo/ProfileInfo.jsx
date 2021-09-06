import React from 'react';
import pclass from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
               <img src='https://toursbooked.com/sites/default/files/product_image/IMG-world-novo-cinema-dubai_0.jpg'></img>
            </div>
            <div className={pclass.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;