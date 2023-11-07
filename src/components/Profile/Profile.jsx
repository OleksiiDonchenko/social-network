import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <main className={style.profile}>
            <h1>Profile</h1>
            <div className={style.wideImgContainer}>
                <img className={style.wideImg} src="https://images.unsplash.com/photo-1533282960533-51328aa49826?auto=format&fit
                =crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2
                h8Mnx8d2lkZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="" />
            </div>
            <div className={style.profileContainer}>
                <ProfileInfo profile={props.profile} />
                <MyPostsContainer profile={props.profile} />
            </div>
        </main >
    );
};

export default Profile;