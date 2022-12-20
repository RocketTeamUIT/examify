import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseDetail, updateTotalLearnedLessons } from '../features/course/courseSlice';
import countCompletedLessonsInCourse from '../features/course/utils/countCompletedLessonsInCourse';

const useFetchCourse = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((store) => store.auth);
  const { courseId } = useParams();

  useEffect(() => {
    const fetchCourses = async () => {
      // DON'T REMOVE THIS LINE
      // dispatch(markFetchLessons(false));
      const response = await dispatch(
        getCourseDetail({
          accessToken,
          courseId,
          depth: 4,
        }),
      );
      // DON'T REMOVE THESE LINES
      // if (response.type === 'course/getCourseDetail/fulfilled' && response.payload.isJoin) {
      //   await dispatch(
      //     getCourseDetail({
      //       accessToken,
      //       courseId,
      //       depth: 4,
      //     }),
      //   );
      //   dispatch(markFetchLessons(true));
      // }
      if (response.type === 'course/getCourseDetail/fulfilled') {
        const totalLearnedLessons = countCompletedLessonsInCourse(response.payload);
        dispatch(updateTotalLearnedLessons(totalLearnedLessons));
      }
    };

    fetchCourses();
  }, [courseId, accessToken, dispatch]);
};

export default useFetchCourse;
