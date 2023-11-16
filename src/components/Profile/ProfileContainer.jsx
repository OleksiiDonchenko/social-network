import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, getUserStatus, selectUserProfile } from '../../redux/profileSlice';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
// import withAuthRedirect from '../hoc/withAuthRedirect';

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector(selectUserProfile);
    const params = useParams();

    useEffect(() => {
        let userId = params.userId;
        if (!userId) {
            userId = 1079;
        }

        dispatch(getUserProfile(userId));
        dispatch(getUserStatus(userId));
    }, [dispatch, params.userId]);

    return (
        // withAuthRedirect(
        <Profile profile={userProfile} status={status} />
        // )
    )
};

export default ProfileContainer;