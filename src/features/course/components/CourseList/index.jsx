import { Tip } from '../../../../components/ui';
import SubNav from './SubNav';
import CourseItem from './CourseItem';
import bannerImg from '../../../../assets/images/courseBanner.png';
import { useCallback } from 'react';
// data:
import { coursesPro, coursesBasic, courseGeneral, courseAdvance } from '../data';

function CourseList() {
  // Handle redirect to Course Detail here
  const handleClickCourse = useCallback((course) => {
    console.log(course.id);
  }, []);

  return (
    <div>
      <div className="px-3 py-5 md:px-8 lg:px-[100px]">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
      </div>
      {/* Sub Navigation */}
      <SubNav />
      {/* Content Page */}
      <div className="mx-3 md:mx-8 lg:mx-[100px]">
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

        {/* Pro Course */}
        {coursesPro?.length > 0 && (
          <>
            <div className="flex items-end mt-10">
              <h3 className="text-body-lg font-semibold mr-3">Khóa học Pro:</h3>
              <div className="bg-blue-700 rounded-md px-2 py-1 text-white">New</div>
            </div>
            {/* List Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
              {coursesPro?.map((course) => (
                <CourseItem key={course?.id} course={course} onClick={handleClickCourse} />
              ))}
            </div>
          </>
        )}
        {/* Basic Course */}
        {coursesBasic?.length > 0 && (
          <>
            <div className="flex items-end mt-10">
              <h3 className="text-body-lg font-semibold mr-3">Khóa học cơ bản:</h3>
            </div>
            {/* List Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
              {coursesBasic?.map((course) => (
                <CourseItem key={course?.id} course={course} onClick={handleClickCourse} />
              ))}
            </div>
          </>
        )}
        {/* General Course */}
        {courseGeneral?.length > 0 && (
          <>
            <div className="flex items-end mt-10">
              <h3 className="text-body-lg font-semibold mr-3">Khóa học phổ thông:</h3>
            </div>
            {/* List Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
              {coursesPro?.map((course) => (
                <CourseItem key={course?.id} course={course} onClick={handleClickCourse} />
              ))}
            </div>
          </>
        )}
        {/* Advance Course */}
        {courseAdvance?.length > 0 && (
          <>
            <div className="flex items-end mt-10">
              <h3 className="text-body-lg font-semibold mr-3">Khóa học nâng cao:</h3>
            </div>
            {/* List Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
              {coursesPro?.map((course) => (
                <CourseItem key={course?.id} course={course} onClick={handleClickCourse} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CourseList;
