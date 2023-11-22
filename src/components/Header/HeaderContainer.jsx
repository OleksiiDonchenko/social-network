import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authMe, authLogout, selectAuthData, isAuthUser }
  from '../../redux/authSlice';
import Header from './Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAuthData);
  const isAuth = data.isAuth;
  const login = data.login;

  useEffect(() => {
    dispatch(isAuthUser());
    dispatch(authMe());
  }, [dispatch, isAuth]);

  const userLogOut = () => {
    dispatch(authLogout())
  };

  return (
    <Header isAuth={isAuth} login={login} authLogout={userLogOut} />
  );
};

export default HeaderContainer;