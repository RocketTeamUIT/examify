import { useEffect, useState } from 'react';

const useGrid = () => {
  const [list, setList] = useState(false);

  useEffect(() => {
    setList(localStorage.getItem('course-grid') === 'true' || false);
  }, []);

  const toggleList = () => {
    localStorage.setItem('course-list', !list);
    setList((prev) => !prev);
  };

  return { list, toggleList };
};

export default useGrid;
