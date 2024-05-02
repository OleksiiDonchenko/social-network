import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthData } from '../redux/authSlice';

const withAuthRedirect = (component) => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuthData).isAuth;

  useEffect(() => {
    if (isAuth) {
      return navigate('/profile');
    }
  }, [navigate, isAuth]);

  return component;
};

export default withAuthRedirect;