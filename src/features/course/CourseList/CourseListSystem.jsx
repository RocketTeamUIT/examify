import { Tip } from '../../../components/ui';
import CourseListItem from './CourseListItem';
import Container from '../../../layouts/components/Container';
import { Filter } from '../../../components/ui';
import useFetchAllCourse from './hooks/useFetchAllCourse';
import useGrid from './hooks/useGrid';
import { useState } from 'react';

function CourseListSystem() {
  const { list, toggleList } = useGrid();
  const { chargeCourses, basicCourses, generalCourses, advanceCourses } = useFetchAllCourse();
  const [searchValue, setSearchValue] = useState('');

  const filterCourses = (courses, searchValue) => {
    const searchValueStr = String(searchValue).toLowerCase();
    return courses.filter((course) => {
      const { name, avgRating, participants, pointReward, pointToUnlock, price, quantityRating } = course;
      const targetValues = [name, avgRating, participants, pointReward, pointToUnlock, price, quantityRating];
      return targetValues.find((value) =>
        String(value || '')
          .toLowerCase()
          .includes(searchValueStr),
      );
    });
  };

  const handleFilterChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Container className="mt-4">
        <Filter
          value={searchValue}
          handleChange={handleFilterChange}
          placeholder="Tìm khoá học theo tên"
          list={list}
          toggleList={toggleList}
        />
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
          <CourseListItem
            list={list}
            listName="Khóa học Pro:"
            listCourse={filterCourses(chargeCourses, searchValue)}
            isNew={true}
          />
        )}

        {/* List Basic Course */}
        {basicCourses?.length > 0 && (
          <CourseListItem
            list={list}
            listName="Khóa học cơ bản:"
            listCourse={filterCourses(basicCourses, searchValue)}
          />
        )}

        {/* List General Course */}
        {generalCourses?.length > 0 && (
          <CourseListItem
            list={list}
            listName="Khóa học phổ thông:"
            listCourse={filterCourses(generalCourses, searchValue)}
          />
        )}

        {/* List Advance Course */}
        {advanceCourses?.length > 0 && (
          <CourseListItem
            list={list}
            listName="Khóa học nâng cao:"
            listCourse={filterCourses(advanceCourses, searchValue)}
          />
        )}
      </Container>
    </>
  );
}

export default CourseListSystem;
