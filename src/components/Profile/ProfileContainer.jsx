import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, selectUserProfile } from '../../redux/profileSlice';
import { useParams } from 'react-router-dom';
import Profile from './Profile';

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector(selectUserProfile);
    const params = useParams();

    useEffect(() => {
        let userId = params.userId;
        if (!userId) {
            userId = 2;
        }

        dispatch(getUserProfile(userId));
    }, [dispatch, params.userId]);

    return <Profile profile={userProfile} />
};

export default ProfileContainer;