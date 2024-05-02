import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthData } from '../../redux/authSlice';

const withoutAuthRedirect = (component) => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuthData).isAuth;

  useEffect(() => {
    if (!isAuth) {
      return navigate('/login');
    }
  }, [navigate, isAuth]);

  return component;
};

export default withoutAuthRedirect;