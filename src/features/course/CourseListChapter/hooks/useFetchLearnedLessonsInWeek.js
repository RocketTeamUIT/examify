import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosWithToken from '../../../../hooks/useAxiosWithToken';
import { getLearnedLessonInWeekService } from '../../services/course';

const useFetchLearnedLessonsInWeek = () => {
  const [learnedLessons, setLearnedLessons] = useState([]);
  const axiosWithToken = useAxiosWithToken();
  const { courseId } = useParams();

  useEffect(() => {
    const fetchLearnedLesson = async () => {
      try {
        const response = await getLearnedLessonInWeekService(axiosWithToken, courseId);
        setLearnedLessons(response.data.data);
      } catch (error) {
        console.log('🚀 ~ file: useFetchLearnedLessonsInWeek.js:12 ~ useEffect ~ error', error);
      }
    };

    fetchLearnedLesson();
  }, [axiosWithToken, courseId]);

  return { learnedLessons };
};

export default useFetchLearnedLessonsInWeek;
