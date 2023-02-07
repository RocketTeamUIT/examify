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
            <Link to={`/exams/record-detail/${recordId}/fullmode`}>
              <Button type="outline" height={32} unbold>
                Xem dạng liệt kê
              </Button>
            </Link>
          ) : (
            <></>
          )}
        </div>

        <div className="mt-6">
          <Table data={headerData} />
          <div className="mt-7 mb-7 h-[1px] bg-bg_light_gray_3"></div>
        </div>
      </div>

      {/* if use at here, performance is optimized */}
      <QuestionModal />

      <Outlet context={[partIdList, partIdListGrByHashtag]} />
    </RecordDetailLayout>
  );
}

export default RecordDetailBase;
