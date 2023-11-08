import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthData, setUserData, setUserDataEmail, setUserDataId, setUserDataLogin }
  from '../../redux/authSlice';
import axios from 'axios';
import Header from './Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAuthData);
  const isAuth = data.isAuth;
  const login = data.login;

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
          .then((response) => {
            if (response.data.resultCode === 0) {
              const { id, login, email } = response.data.data;
              dispatch(setUserDataId(id));
              dispatch(setUserDataLogin(login));
              dispatch(setUserDataEmail(email));
              // dispatch(setUserData(id, login, email));
            }
          })
      } catch (error) {
        console.error('Error fetching user data:', error);
      }

    }
    fetchData();
  }, [dispatch]);

  return (
    <Header isAuth={isAuth} login={login} />
  );
};

export default HeaderContainer;