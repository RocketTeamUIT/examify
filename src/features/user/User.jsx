import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SubNav } from '../../components/ui';
import Container from '../../layouts/components/Container';

const NAV_LIST = [
  {
    name: 'Khoá học của tôi',
    path: '/me',
  },
  {
    name: 'Đề thi của tôi',
    path: '/me/exams',
  },
];

const User = () => {
  const [curr, setCurr] = useState();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/me':
        setCurr(0);
        break;
      case '/me/exams':
        setCurr(1);
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <>
      <SubNav navList={NAV_LIST} initialValue={curr} />
      <Container className="min-h-screen">
        <Outlet />
      </Container>
    </>
  );
};

export default User;
