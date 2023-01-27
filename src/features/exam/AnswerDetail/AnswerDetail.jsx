import { React, useState } from 'react';
import { Button } from '../../../components/ui';
import Main from './Main';
import useFetchExamTakingData from '../ExamTaking/useFetchExamTakingData';
import ControlBar from '../ExamTaking/ControlBar';

const mockConfig = {
  id: 1,
  partTakeList: [
    { id: '1p', name: 'Part 1' },
    { id: '2p', name: 'Part 2' },
    { id: '3p', name: 'Part 3' },
    { id: '4p', name: 'Part 4' },
    { id: '5p', name: 'Part 5' },
    { id: '6p', name: 'Part 6' },
    { id: '7p', name: 'Part 7' },
  ],
  duration: 7200,
};

function AnswerDetail({ config = mockConfig }) {
  const [tackle, partList] = useFetchExamTakingData(config);

  return (
    <div>
      {/* Exam info */}
      <div className="mt-6 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-h5 sm:text-h4 lg:text-h3 font-semibold">ETS 2022 - Test 1</h1>
          <Button type="outline" height={32}>
            Thoát
          </Button>
        </div>
        <h2 className="text-h6 sm:text-h5 lg:text-h4 font-normal mt-3">Bộ đề thi: ETS 2022</h2>
      </div>

      {/* Layout */}
      <div className="mt-5 px-2 xl:px-5 flex w-full gap-3 xl:gap-5 items-start">
        {/* Thi */}
        <Main tackle={tackle} />

        {/* Sidebar */}
        <ControlBar partList={partList} />
      </div>
    </div>
  );
}

export default AnswerDetail;
