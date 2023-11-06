import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile, setUserProfile } from '../../redux/profileSlice';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                dispatch(setUserProfile(response.data));
            });
    }, [dispatch, params.userId]);

    return <Profile profile={userProfile} />
};

export default ProfileContainer;