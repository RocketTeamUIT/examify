import ExamDetailLayout from './ExamDetailLayout';
import { Breadcrumb, Button, Navs } from '../../../components/ui';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';
import { Link, Outlet, useParams } from 'react-router-dom';
import useFetchExamDetail from '../hooks/useFetchExamDetail';
import { useSelector } from 'react-redux';
import { isEmptyObject } from 'utils';

function ExamDetailBase() {
  const { examId } = useParams();
  useFetchExamDetail(examId);
  const { detail } = useSelector((store) => store.exam);

  if (!detail || isEmptyObject(detail)) return null;

  return (
    <ExamDetailLayout>
      <Breadcrumb hierarchy={[<Link to="/exams">Đề thi</Link>, detail.name]} />

      {/* Exam name */}
      <div className="flex justify-between mt-5 mb-2">
        <h1 className="text-h3 font-bold">{detail.name}</h1>
        <div className="">
          <Link to={detail.fileDownload} download target="_blank">
            <Button color="#777777" leftIcon={<HiOutlineArrowDownTray fontSize={16} />} height="32px" type="default">
              Download
            </Button>
          </Link>
        </div>
      </div>

      {/* NAV */}
      <Navs
        noShadow={true}
        navList={[
          {
            name: 'Thông tin đề thi',
            path: '/exams/1',
          },
          {
            name: 'Đáp án',
            path: '/exams/1/answer',
          },
        ]}
      />
      <div className="mt-1 h-[1px] bg-bg_light_gray_3"></div>

      <Outlet context={[detail.historyTaking]} />
    </ExamDetailLayout>
  );
}

export default ExamDetailBase;
