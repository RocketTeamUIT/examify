import ControlBar from './ControlBar';
import Main from './Main';
import ExamInfo from './ExamInfo';
import { useLocation } from 'react-router-dom';
import useFetchData from './useFetchData';
import useFormatData from './useFormatData';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'utils';

function ExamTaking() {
  // Get config from react-router-dom
  const location = useLocation();
  const { config } = location.state;
  useFetchData(config);
  const examTaking = useSelector((store) => store.tackle.data);
  const [{ examSeriesName, examName, audio, data }, partList] = useFormatData(examTaking);
  if (!examTaking || isEmptyObject(examTaking)) return null;

  return (
    <div>
      {/* Exam info */}
      <ExamInfo examSeriesName={examSeriesName} examName={examName} />

      {/* Layout */}
      <div className="mt-5 px-2 xl:px-5 flex w-full gap-3 xl:gap-5 items-start">
        {/* Thi */}
        <Main tackle={data} audio={audio} />

        {/* Sidebar */}
        {partList && <ControlBar partList={partList} />}
      </div>
    </div>
  );
}

export default ExamTaking;
