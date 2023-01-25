import React from 'react';
import Container from 'layouts/components/Container';
import { SubNav } from 'components/ui';
import { Outlet, useLocation } from 'react-router';
import withHeader from 'components/hoc/withHeader';

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
      <SubNav navList={NAV_LIST} initialValue={initialValue} />

      <Container className="overflow-visible">
        <Outlet />
      </Container>
    </>
  );
};

const FlashcardWithHOC = withHeader('Flashcard')(Flashcard);

export default FlashcardWithHOC;
