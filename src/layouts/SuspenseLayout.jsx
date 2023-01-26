import classNames from 'classnames';
import useAxiosWithToken from 'hooks/useAxiosWithToken';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUserInfo } from '../features/auth/authSlice';
import LoadingScreen from './components/LoadingScreen';

// Show pending animation while loading content/api
const SuspenseLayout = ({ children }) => {
  const { isLoading, isLogin } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const axios = useAxiosWithToken();

  useEffect(() => {
    isLogin && dispatch(getUserInfo(axios));
  }, [dispatch, axios, isLogin]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={classNames(isLoading && 'opacity-0 pointer-events-none')}>{children}</div>
    </>
  );
};

export default SuspenseLayout;
