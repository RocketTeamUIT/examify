import { useState } from 'react';
import { Filter } from '../../components/ui';
import CourseListItem from '../course/CourseList/CourseListItem';
import useFetchAllCourse from '../course/CourseList/hooks/useFetchAllCourse';
import useGrid from '../course/CourseList/hooks/useGrid';

const UserCourses = () => {
  const { basicCourses, generalCourses, advanceCourses } = useFetchAllCourse();
  const courses = [...basicCourses, ...generalCourses, ...advanceCourses];
  const { list, toggleList } = useGrid();
  const [searchValue, setSearchValue] = useState('');

  const joinedCourses = courses.filter((course) => course.isJoin);

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
      <div className="mt-4">
        <Filter
          value={searchValue}
          handleChange={handleFilterChange}
          placeholder="Tìm khoá học theo tên"
          list={list}
          toggleList={toggleList}
        />
      </div>
      <CourseListItem list={list} listCourse={filterCourses(joinedCourses, searchValue)} />
    </>
  );
};

export default UserCourses;
