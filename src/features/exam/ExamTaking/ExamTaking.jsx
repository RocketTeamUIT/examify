import ControlBar from './ControlBar';
import Main from './Main';
import useFetchExamTakingData from './useFetchExamTakingData';
import ExamInfo from './ExamInfo';
import { useLocation } from 'react-router-dom';

const mockConfig = {
  id: 1, // examId
  partIdList: ['1p', '2p', '3p', '4p', '5p', '6p', '7p'],
  duration: 7200, // second
  isFullmode: true,
};

function ExamTaking() {
  // Get config from react-router-dom
  const location = useLocation();
  const { config } = location.state;
  const tempConfig = { ...config, partIdList: mockConfig.partIdList };
  const [{ examSeriesName, examName, audio, data }, partList] = useFetchExamTakingData(tempConfig);

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
