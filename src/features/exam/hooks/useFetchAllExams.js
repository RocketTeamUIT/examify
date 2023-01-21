import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { getAllExamsService } from '../services/exam';

function useFetchAllExams() {
  const axiosPrivate = useAxiosPrivate();
  const [examList, setExamList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setExamList((await getAllExamsService(axiosPrivate)).data);
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return examList;
}

export default useFetchAllExams;
