import ControlBar from './ControlBar';
import Main from './Main';
import useFetchExamTakingData from './useFetchExamTakingData';
import ExamInfo from './ExamInfo';

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

function ExamTaking({ config = mockConfig }) {
  const [{ examSeriesName, examName, audio, data }, partList] = useFetchExamTakingData(config);

  return (
    <div>
      {/* Exam info */}
      <ExamInfo examSeriesName={examSeriesName} examName={examName} />

      {/* Layout */}
      <div className="mt-5 px-2 xl:px-5 flex w-full gap-3 xl:gap-5 items-start">
        {/* Thi */}
        <Main tackle={data} audio={audio} />

        {/* Sidebar */}
        <ControlBar partList={partList} />
      </div>
    </div>
  );
}

export default ExamTaking;
