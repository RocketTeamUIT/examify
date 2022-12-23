import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const PrivateLayout = ({ children, excludeHeader, excludeFooter }) => {
  const { accessToken, failAttempt } = useSelector((store) => store.auth);
  const location = useLocation();

  return !accessToken && failAttempt ? (
    <>
      {!excludeHeader && <Header />}
      <div className="h-[calc(100vh-60px)] flex">
        <h3 className="italic font-semibold m-auto">
          Vui lòng{' '}
          <Link
            to="/signin"
            state={{
              from: location,
            }}
            className="text-primary underline"
          >
            đăng nhập
          </Link>{' '}
          để truy cập
        </h3>
      </div>
      {!excludeFooter && <Footer />}
    </>
  ) : (
    children
  );
};

export default PrivateLayout;
