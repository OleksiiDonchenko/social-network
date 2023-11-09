import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile, setUserProfile } from '../../redux/profileSlice';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import { profileAPI } from '../api/profileAPI';

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector(selectUserProfile);
    const params = useParams();

    useEffect(() => {
        let userId = params.userId;
        if (!userId) {
            userId = 2;
        }

        profileAPI.getUserProfile(userId)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
    }, [dispatch, params.userId]);

    return <Profile profile={userProfile} />
};

export default ProfileContainer;