import { useEffect, useState } from 'react';

const useGrid = () => {
  const [list, setList] = useState(false);

  useEffect(() => {
    setList(localStorage.getItem('exam-grid') === 'true' || false);
  }, []);

  const toggleList = () => {
    localStorage.setItem('exam-list', !list);
    setList((prev) => !prev);
  };

  return { list, toggleList };
};

export default useGrid;
