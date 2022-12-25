import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { getChapterService } from '../../services/course';

const initialValues = {
  id: '',
  name: '',
  unitList: [],
};

export default function useFetchChapter(chapterId, stayOnError = false) {
  const [chapter, setChapter] = useState(initialValues);
  const axiosPrivate = useAxiosPrivate(stayOnError);

  useEffect(() => {
    const fetchChapters = async (axiosPrivate, chapterId) => {
      try {
        const response = await getChapterService(axiosPrivate, chapterId);
        setChapter(response.data.data);
      } catch (error) {
        console.log('🚀 ~ file: useFetchChapter.js:15 ~ fetchChapters ~ error', error);
      }
    };

    fetchChapters(axiosPrivate, chapterId);
  }, [axiosPrivate, chapterId]);

  return { chapter };
}
