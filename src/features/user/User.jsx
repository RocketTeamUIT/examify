import React, { useEffect, useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, SubNav } from '../../components/ui';
import Container from '../../layouts/components/Container';
import config from 'config';

const NAV_LIST = [
  {
    name: 'Khoá học của tôi',
    path: config.routes.myCourses,
  },
  {
    name: 'Flashcard của tôi',
    path: config.routes.myFlashcards,
  },
  {
    name: 'Lịch sử làm đề',
    path: config.routes.myExams,
  },
  {
    name: 'Lịch sử thi đấu',
    path: config.routes.myContests,
  },
];

const User = () => {
  const { user } = useSelector((store) => store.auth);
  const [curr, setCurr] = useState();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/me':
        setCurr(0);
        break;
      case '/me/flashcards':
        setCurr(1);
        break;
      case '/me/exams':
        setCurr(2);
        break;
      case '/me/contests':
        setCurr(3);
        break;
      default:
        break;
    }
  }, [location]);

  if (!user) return null;

  return (
    <>
      <Container overflowVisible>
        <div className="h-[200px] rounded-b-3xl relative overflow-visible">
          <img className="object-cover w-full h-full rounded-b-3xl" src={user.banner} alt="User banner" />
          <img
            src={user.avt}
            alt={user.lastName}
            className="rounded-full absolute w-[160px] h-[160px] z-10 top-[56%] md:left-12 md:-translate-x-0 left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex md:flex-row flex-col gap-4 items-center mt-20 md:mt-2 md:ml-56 md:mr-12">
          <h1 className="font-bold flex-1 text-center md:text-left text-h2">{user.firstName + ' ' + user.lastName}</h1>
          <Link to="/user-profile">
            <Button type="default" leftIcon={<MdOutlineEdit className="text-h4" />}>
              Chỉnh sửa
            </Button>
          </Link>
        </div>
      </Container>

      <div className="mt-6 md:mt-12" />
      <SubNav navList={NAV_LIST} initialValue={curr} noShadow />
      <Container className="min-h-screen pb-10">
        <Outlet />
      </Container>
    </>
  );
};

export default User;
