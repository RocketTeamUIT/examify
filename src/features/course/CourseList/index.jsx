// import component:
import { Tip } from '../../../components/ui';
import SubNav from '../../../components/ui/SubNav';
import CourseListItem from './CourseListItem';
// import image:
import bannerImg from '../../../assets/images/courseBanner.png';
// import Hook:
import { useCallback } from 'react';
// import data:
import { coursesPro, coursesBasic, courseGeneral, courseAdvance } from '../data';
import Container from '../../../layouts/components/Container';

function CourseList() {
  // todo: Handle redirect to Course Detail
  const handleClickCourse = useCallback((course) => {
    console.log(course.id);
  }, []);

  return (
    <div className="mb-10">
      {/* Banner */}
      <Container className="py-5">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
      </Container>

      {/* Sub Navigation component*/}
      <SubNav />

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
        {coursesPro?.length > 0 && (
          <CourseListItem
            listName="Khóa học Pro:"
            listCourse={coursesPro}
            handleClickCourse={handleClickCourse}
            isNew={true}
          />
        )}

        {/* List Basic Course */}
        {coursesBasic?.length > 0 && (
          <CourseListItem listName="Khóa học cơ bản:" listCourse={coursesBasic} handleClickCourse={handleClickCourse} />
        )}

        {/* List General Course */}
        {courseGeneral?.length > 0 && (
          <CourseListItem
            listName="Khóa học phổ thông:"
            listCourse={courseGeneral}
            handleClickCourse={handleClickCourse}
          />
        )}

        {/* List Advance Course */}
        {courseAdvance?.length > 0 && (
          <CourseListItem
            listName="Khóa học nâng  cao:"
            listCourse={courseAdvance}
            handleClickCourse={handleClickCourse}
          />
        )}
      </Container>
    </div>
  );
}

export default CourseList;
