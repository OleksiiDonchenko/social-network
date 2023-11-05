import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
    return (
        <div className={style.profile}>
            <h1>Profile</h1>
            <ProfileInfo />
            <MyPostsContainer />
        </div >
    );
};

export default Profile;