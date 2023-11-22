import React from 'react';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Login from './Login';

const LoginContainer = () => {
  return (
    withAuthRedirect(<Login />)
  )
}

export default LoginContainer;