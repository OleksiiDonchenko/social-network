import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthData, setUserData, setUserDataEmail, setUserDataId, setUserDataLogin }
  from '../../redux/authSlice';
import Header from './Header';
import { headerAPI } from '../api/headerAPI';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAuthData);
  const isAuth = data.isAuth;
  const login = data.login;

  useEffect(() => {
    const fetchData = async () => {
      try {
        headerAPI.authMe()
          .then((data) => {
            if (data.resultCode === 0) {
              const { id, login, email } = data.data;
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