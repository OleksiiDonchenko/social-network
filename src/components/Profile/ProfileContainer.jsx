import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, selectUserProfile } from '../../redux/profileSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from './Profile';
import { selectAuthData } from '../../redux/authSlice';

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

    const navigate = useNavigate();
    const isAuth = useSelector(selectAuthData).isAuth;
    useEffect(() => {
        if (!isAuth) {
            return navigate('/login');
        }
    }, [navigate, isAuth]);

    return <Profile profile={userProfile} />
};

export default ProfileContainer;