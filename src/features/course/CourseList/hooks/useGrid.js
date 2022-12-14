import { useEffect, useState } from 'react';

const useGrid = () => {
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(localStorage.getItem('course-grid') === 'true' || false);
  }, []);

  const toggleGrid = () => {
    console.log(grid);
    localStorage.setItem('course-grid', !grid);
    setGrid((grid) => !grid);
  };

  return { grid, toggleGrid };
};

export default useGrid;
