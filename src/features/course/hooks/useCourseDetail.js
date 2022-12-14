import { useCallback, useEffect, useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { getCourseDetailService } from '../services/course';

const initialValues = {
  id: '',
  name: '',
  chapterList: [
    {
      id: '',
      name: '',
      unitList: [
        {
          id: '',
          name: '',
          lesson: '',
        },
      ],
    },
  ],
};

const useCourseDetail = (courseId, stayOnError = true, depth = 4) => {
  const [courseDetail, setCourseDetail] = useState(initialValues);
  const axiosPrivate = useAxiosPrivate(stayOnError);

  const fetchData = useCallback(async () => {
    try {
      const response = await getCourseDetailService(axiosPrivate, courseId, depth);
      setCourseDetail(response.data.data);
    } catch (error) {
      console.log('🚀 ~ file: useCourseDetail.js:15 ~ fetchData ~ error', error);
    }
  }, [axiosPrivate, courseId, depth]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { courseDetail };
};

export default useCourseDetail;
