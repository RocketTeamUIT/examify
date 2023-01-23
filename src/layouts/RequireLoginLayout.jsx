import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RequireLoginLayout = ({ children }) => {
  const { isLogin } = useSelector((store) => store.auth);

  return (
    <>
      <div className={classNames(!isLogin && 'opacity-0 pointer-events-none absolute')}>{children}</div>
      {!isLogin && (
        <h5 className="w-full min-h-[500px] flex items-center justify-center text-h5 font-bold italic">
          Vui lòng&nbsp;
          <Link to="/signin" className="text-primary underline">
            đăng nhập
          </Link>
          &nbsp;để tiếp tục
        </h5>
      )}
    </>
  );
};

export default RequireLoginLayout;
