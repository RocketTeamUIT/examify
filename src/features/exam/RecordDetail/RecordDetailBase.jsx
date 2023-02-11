import Table from './Table';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { Breadcrumb, Button } from '../../../components/ui';
import RecordDetailLayout from './RecordDetailLayout';
import useFetchData from './useFetchData';
import useFormatData from './useFormatData';
import { QuestionModal } from '../components/QuestionCircle';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'utils';
import config from 'config';
import Review from './Review';
import { dataReview } from '../data';

function RecordDetailBase() {
  const location = useLocation();
  const { recordId } = useParams();
  useFetchData();
  const recordData = useSelector((store) => store.record.data);
  const [headerData, partIdList, partIdListGrByHashtag] = useFormatData(recordData);
  if (!recordData || isEmptyObject(recordData)) return null;

  return (
    <RecordDetailLayout>
      {/* Information */}
      <div className="mt-8">
        <Breadcrumb
          hierarchy={[
            <Link to={config.routes.myExams}>Lịch sử thi</Link>,
            <Link to={`/exams/${headerData.examId}`}>{headerData.examSeriesName}</Link>,
          ]}
        />

        <div className="mt-5 flex justify-between">
          <h3 className="text-h3 font-bold">{headerData.examName}</h3>
          {location.pathname === `/exams/record-detail/${recordId}/fullmode` ? (
            <Link to={`/exams/record-detail/${recordId}`}>
              <Button type="outline" height={32} unbold>
                Xem dạng phân loại
              </Button>
            </Link>
          ) : (
            <></>
          )}

          {location.pathname === `/exams/record-detail/${recordId}` ? (
            <Link to={`/exams/advise`}>
              <Button>Nhận tư vấn</Button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>

      <h2 className="text-h4 font-medium mb-5">Kết quả bài làm</h2>

      {/* if use at here, performance is optimized */}
      <QuestionModal />

      <Outlet context={[partIdList, partIdListGrByHashtag]} />

      {/* Section static */}
      <Review data={dataReview} />
    </RecordDetailLayout>
  );
}

export default RecordDetailBase;
