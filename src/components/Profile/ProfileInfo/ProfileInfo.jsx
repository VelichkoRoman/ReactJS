import React from 'react';
import pclass from "./ProfileInfo.module.css";
import userPhoto from "../../../Assets/Images/man.png";
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <div>
               <img src='https://toursbooked.com/sites/default/files/product_image/IMG-world-novo-cinema-dubai_0.jpg'></img>
            </div>
            <div className={pclass.descriptionBlock}>
                <img src={props.profile.photos.large  } />
                <p>Обо мне: {props.profile.aboutMe}</p>
                {/* <p>Contacts: {props.profile.contacts}</p> */}
                <p>В поисках работы: {props.profile.lookingForAJob }</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <h2><p style={{textTransform: 'uppercase', color: 'green'}}>{props.profile.fullName}</p></h2>
                ava + description
               
            </div>
        </div>
    );
}

export default ProfileInfo;