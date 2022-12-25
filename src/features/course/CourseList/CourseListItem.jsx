import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseItem from './CourseItem';

function CourseListItem({ list, listName, listCourse, isNew = false }) {
  const navigate = useNavigate();

  const handleClickCourse = (course) => {
    navigate(`/courses/${course.id}/detail`);
  };

  return (
    <>
      <div className="flex items-end mt-10">
        <h3 className="text-body-lg font-semibold mr-3">{listName}</h3>
        {isNew && <div className="bg-blue-700 rounded-md px-2 py-1 text-white">New</div>}
      </div>
      {/* List Course */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
        {listCourse?.map((course) => (
          <CourseItem grid={list} key={course?.id} course={course} onClick={handleClickCourse} />
        ))}
      </div>
    </>
  );
}

export default memo(CourseListItem);
