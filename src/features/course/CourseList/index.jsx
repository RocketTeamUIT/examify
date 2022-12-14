import { Tip } from '../../../components/ui';
import SubNav from '../../../components/ui/SubNav';
import CourseListItem from './CourseListItem';
import Container from '../../../layouts/components/Container';
import { Filter } from '../../../components/ui';
import bannerImg from '../../../assets/images/courseBanner.png';
import useFetchCourse from './hooks/useFetchCourse';
import useGrid from './hooks/useGrid';

const NAV_LIST = [
  {
    name: 'Khám phá',
    path: '/courses',
  },
  {
    name: 'Khoá học của tôi',
    path: '/my-courses',
  },
];

function CourseList() {
  const { grid, toggleGrid } = useGrid();
  const { chargeCourses, basicCourses, generalCourses, advanceCourses } = useFetchCourse();

  return (
    <div className="mb-10">
      {/* Banner */}
      <Container className="py-5">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
      </Container>

      {/* Sub Navigation component*/}
      <SubNav navList={NAV_LIST} />

      <Container className="mt-4">
        <Filter grid={grid} toggleGrid={toggleGrid} />
      </Container>

      {/* Main content CourseList Page */}
      <Container>
        {/* Course Description */}
        <h3 className="text-body-lg font-semibold mt-10">Tham gia Khóa học tại Examify</h3>
        <p className="mt-4 text-body-md text-t_dark">
          Những khoá học tiếng Anh online chất lượng cao của Examify được thiết kế theo chương trình tiếng Anh chuẩn
          CEFR (A1-C2) của đại học Cambridge và Oxford (Anh) với hệ thống bài giảng, bài tập phong phú đa dạng. Bạn có
          thể học tham khảo trước khi đăng ký.
        </p>
        <div className="hidden my-8 lg:block">
          <Tip color="green">Chú ý: Tích lũy cho mình thật nhiều điểm số để mở khóa các khóa học .</Tip>
        </div>

        {/* List Pro Course */}
        {chargeCourses?.length > 0 && (
          <CourseListItem grid={grid} listName="Khóa học Pro:" listCourse={chargeCourses} isNew={true} />
        )}

        {/* List Basic Course */}
        {basicCourses?.length > 0 && (
          <CourseListItem grid={grid} listName="Khóa học cơ bản:" listCourse={basicCourses} />
        )}

        {/* List General Course */}
        {generalCourses?.length > 0 && (
          <CourseListItem grid={grid} listName="Khóa học phổ thông:" listCourse={generalCourses} />
        )}

        {/* List Advance Course */}
        {advanceCourses?.length > 0 && (
          <CourseListItem grid={grid} listName="Khóa học nâng cao:" listCourse={advanceCourses} />
        )}
      </Container>
    </div>
  );
}

export default CourseList;
