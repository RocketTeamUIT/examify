import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function getCurrentIndexPage(navList, currentPath) {
  let currentIndex = 0;

  navList.forEach((navItem, index) => {
    if (navItem.path === currentPath) currentIndex = index;
  });

  return currentIndex;
}

function useCurrentPage(navList) {
  const location = useLocation();
  const current = getCurrentIndexPage(navList, location.pathname);
  const [currentIndexPage, setCurrentIndexPage] = useState(current);

  function updateCurrentIndexPage(newIndex) {
    setCurrentIndexPage(newIndex);
  }

  return [currentIndexPage, updateCurrentIndexPage];
}

export default useCurrentPage;
