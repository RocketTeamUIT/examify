import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import useAxiosWithToken from '../../../../hooks/useAxiosWithToken';
import { getAllCoursesService } from '../../services/course';

const useFetchAllCourse = () => {
  const [courses, setCourses] = useState([]);
  const { accessToken } = useSelector((store) => store.auth);
  const axiosWithToken = useAxiosWithToken();

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
        const response = await getAllCoursesService(axiosWithToken);
        setCourses(response.data.data);
      } catch (error) {
        console.log('🚀 ~ file: index.jsx:27 ~ fetchCourses ~ error', error);
      }
    };
    fetchCourses();
  }, [axiosWithToken, accessToken]);

  return filterCourses;
};

export default useFetchAllCourse;
