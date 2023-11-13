import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, selectAuthData }
  from '../../redux/authSlice';
import Header from './Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAuthData);
  const isAuth = data.isAuth;
  const login = data.login;

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <Header isAuth={isAuth} login={login} />
  );
};

export default HeaderContainer;