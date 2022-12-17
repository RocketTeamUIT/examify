import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosWithToken from '../../../../hooks/useAxiosWithToken';
import { getUncompletedUnitsService } from '../../services/course';

const useFetchUncompletedUnit = () => {
  const [uncompletedLessons, setUncompletedLessons] = useState([]);
  const axiosWithToken = useAxiosWithToken();
  const { courseId } = useParams();

  useEffect(() => {
    const fetchUncompletedLessons = async () => {
      try {
        const response = await getUncompletedUnitsService(axiosWithToken, courseId);
        setUncompletedLessons(response.data.data);
      } catch (error) {
        console.log('🚀 ~ file: useFetchUncompletedUnit.js:13 ~ fetchUncomcpletedLessons ~ error', error);
      }
    };

    fetchUncompletedLessons();
  }, [axiosWithToken, courseId]);

  return { uncompletedLessons };
};

export default useFetchUncompletedUnit;
