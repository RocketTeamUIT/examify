import { useEffect, useMemo, useState } from 'react';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { getAllCoursesService } from '../../services/course';

const useFetchCourse = () => {
  const axiosPrivate = useAxiosPrivate(true);
  const [courses, setCourses] = useState([]);

  const filterCourses = useMemo(() => {
    const chargeCourses = [];
    const basicCourses = [];
    const generalCourses = [];
    const advanceCourses = [];

    courses.forEach((course) => {
      if (course.charges) chargeCourses.push(course);

      switch (course.level) {
        case 'basic':
          basicCourses.push(course);
          break;
        case 'general':
          generalCourses.push(course);
          break;
        case 'advance':
          advanceCourses.push(course);
          break;
        default:
          break;
      }
    });

    return { chargeCourses, basicCourses, generalCourses, advanceCourses };
  }, [courses]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCoursesService(axiosPrivate);
        setCourses(response.data.data);
      } catch (error) {
        console.log('🚀 ~ file: index.jsx:27 ~ fetchCourses ~ error', error);
      }
    };
    fetchCourses();
  }, [axiosPrivate]);

  return filterCourses;
};

export default useFetchCourse;
