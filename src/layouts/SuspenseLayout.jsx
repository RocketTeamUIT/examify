import classNames from 'classnames';
import React from 'react';
import { useEffect } from 'react';
import { Watch } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../features/auth/authSlice';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

// Show pending animation while loading content/api
const SuspenseLayout = ({ isLoading, children }) => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate(true);

  useEffect(() => {
    dispatch(getUserInfo(axiosPrivate));
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed flex top-0 left-0 right-0 bottom-0 z-50">
          <div className="m-auto">
            <Watch
              height="80"
              width="80"
              radius="48"
              color="#0E46C7"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        </div>
      )}
      <div className={classNames(isLoading && 'opacity-0 pointer-events-none')}>{children}</div>
    </>
  );
};

export default SuspenseLayout;
