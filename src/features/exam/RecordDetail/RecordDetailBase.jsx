import Table from './Table';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Breadcrumb, Button } from '../../../components/ui';
import RecordDetailLayout from './RecordDetailLayout';
import useFetchData from './useFetchData';
import { QuestionModal } from '../components/QuestionCircle';

function RecordDetailBase() {
  const location = useLocation();
  const [headerData] = useFetchData();

  return (
    <RecordDetailLayout>
      {/* Information */}
      <div className="mt-8">
        <Breadcrumb hierarchy={[<Link to="/exams/record-detail">Lịch sử thi</Link>, 'Toeic', 'ETS 2022']} />

        <div className="mt-5 flex justify-between">
          <h3 className="text-h3 font-bold">{headerData.examName}</h3>
          {location.pathname === '/exams/record-detail/fullmode' ? (
            <Link to={'/exams/record-detail'}>
              <Button type="outline" height={32} unbold>
                Xem dạng phân loại
              </Button>
            </Link>
          ) : (
            <></>
          )}

          {location.pathname === '/exams/record-detail' ? (
            <Link to={'/exams/record-detail/fullmode'}>
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

      <Outlet />
    </RecordDetailLayout>
  );
}

export default RecordDetailBase;
