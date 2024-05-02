import React from 'react';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectAuthData } from '../../redux/authSlice';

const LoginContainer = () => {
  const data = useSelector(selectAuthData);
  const isAuth = data.isAuth;
  const body = document.querySelector('body');

  if (isAuth === false) {
    body.classList.add('loggedOut');
  } else {
    body.classList.remove('loggedOut');
  }

  return (
    withAuthRedirect(<Login />)
  )
}

export default LoginContainer;