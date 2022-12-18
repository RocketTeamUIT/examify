import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseDetail } from '../features/course/courseSlice';

const useFetchCourse = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((store) => store.auth);
  const { courseId } = useParams();

  useEffect(() => {
    const fetchCourses = async () => {
      // DON'T REMOVE THIS LINE
      // dispatch(markFetchLessons(false));
      dispatch(
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
    };

    fetchCourses();
  }, [courseId, accessToken, dispatch]);
};

export default useFetchCourse;
