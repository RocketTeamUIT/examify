import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const { accessToken } = useSelector((store) => store.auth);

  const fetchData = useCallback(async () => {
    try {
      const response = await getCourseDetailService(accessToken, courseId, depth);
      setCourseDetail(response.data.data);
    } catch (error) {
      console.log('🚀 ~ file: useCourseDetail.js:15 ~ fetchData ~ error', error);
    }
  }, [accessToken, courseId, depth]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { courseDetail };
};

export default useCourseDetail;
