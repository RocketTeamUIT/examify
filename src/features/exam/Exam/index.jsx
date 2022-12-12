import React from 'react';
import GradientBanner from '../../../components/ui/GradientBanner';
import SubNav from '../../../components/ui/SubNav';
import Container from '../../../layouts/components/Container';
import { Filter } from '../../../components/ui';
import { useState } from 'react';
import { useEffect } from 'react';
import ExamList from './ExamList';

const Exam = () => {
  const [grid, setGrid] = useState(false);
  useEffect(() => {
    setGrid(localStorage.getItem('exam-grid') === 'true' || false);
  }, []);
  const toggleGrid = () => {
    localStorage.setItem('exam-grid', !grid);
    setGrid((grid) => !grid);
  };

  return (
    <>
      <GradientBanner>Đề thi</GradientBanner>

      <SubNav
        gap="50px"
        navList={[
          {
            name: 'Tất cả',
          },
          {
            name: 'TOEIC',
          },
        ]}
      />

      <Container className="mt-10">
        <Filter grid={grid} toggleGrid={toggleGrid} />

        <div className="mt-10">
          <ExamList />
        </div>
      </Container>
    </>
  );
};

export default Exam;
