import React from 'react';
import Container from 'layouts/components/Container';
import { SubNav } from 'components/ui';
import { Outlet, useLocation } from 'react-router';

const NAV_LIST = [
  { name: 'Flashcard của bạn', path: '/flashcards' },
  {
    name: 'Khám phá',
    path: '/flashcards/explore',
  },
];

const Flashcard = () => {
  const location = useLocation();
  const initialValue = NAV_LIST.findIndex((nav) => nav.path === location.pathname);

  return (
    <>
      <div className="h-[160px] bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] flex items-center">
        <Container overflowVisible className="bg-transparent">
          <h1 className="font-bold text-h1 tracking-wider text-t_dark">Flashcard</h1>
        </Container>
      </div>

      <SubNav navList={NAV_LIST} initialValue={initialValue} />

      <Container className="overflow-visible">
        <Outlet />
      </Container>
    </>
  );
};

export default Flashcard;
