import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const ExamDetailLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ExamDetailLayout;
