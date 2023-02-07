import { Button } from '../../../components/ui';
import Main from './Main';
import ControlBar from './ControlBar';
import useFetchData from './useFetchData.js';
import useFormatData from './useFormatData.js';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'utils';
import { Link, useParams } from 'react-router-dom';

function AnswerDetail() {
  const { examId } = useParams();

  useFetchData();
  const recordData = useSelector((store) => store.record.data);
  const [{ data }, partList] = useFormatData(recordData);
  if (!recordData || isEmptyObject(recordData)) return null;

  return (
    <div>
      {/* Exam info */}
      <div className="mt-6 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-h5 sm:text-h4 lg:text-h3 font-semibold">{recordData.examName}</h1>
          <Link to={`/exams/${examId}`}>
            <Button type="outline" height={32}>
              Thoát
            </Button>
          </Link>
        </div>
        <h2 className="text-h6 sm:text-h5 lg:text-h4 font-normal mt-3">Bộ đề thi: {recordData.examSeriesName}</h2>
      </div>

      {/* Layout */}
      <div className="mt-5 px-2 xl:px-5 flex w-full gap-3 xl:gap-5 items-start">
        {/* Thi */}
        {/* data co nhieu part */}
        <Main partList={data} />
        {/* Sidebar */}
        <ControlBar partList={partList} />
      </div>
    </div>
  );
}

export default AnswerDetail;
