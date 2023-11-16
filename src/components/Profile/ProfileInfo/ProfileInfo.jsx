import React, { useState } from 'react';
import style from './ProfileInfo.module.css'
import profilePhoto from '../../../assets/images/user-icon.png'
import Preloader from '../../common/Preloader';
import OpenUserProfilePhoto from './OpenUserProfilePhoto';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    const [photoActive, setPhotoActive] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.infoContainer}>
            <div className={style.info}>
                <h3>{props.profile.fullName}</h3>
                <div className={style.photoUserProfileContainer}>
                    <img className={style.photoUserProfile}
                        src={props.profile.photos.large ? props.profile.photos.large : profilePhoto}
                        alt="photo-user-profile" onClick={() => setPhotoActive(true)} />
                    {props.profile.photos.large ?
                        <OpenUserProfilePhoto active={photoActive} setActive={setPhotoActive}
                            userProfilePhoto={props.profile.photos.large} /> : ''}

                </div>
                {/* <div className={style.description}>{props.profile.aboutMe}</div> */}
                <ProfileStatus />
            </div>
        </div>
    );
};

export default ProfileInfo;