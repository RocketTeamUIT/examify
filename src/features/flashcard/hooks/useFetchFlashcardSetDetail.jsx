import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFlashcardSetDetailService } from '../services/flashcard';

function useFetchFlashcardSetDetail(id) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const axiosWithToken = useAxiosWithToken();
  const { accessToken } = useSelector((store) => store.auth);

  const fetchData = useCallback(async () => {
    try {
      setLoading((prev) => !prev);
      const response = await getFlashcardSetDetailService({ id, axios: axiosWithToken });
      setDetail(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading((prev) => !prev);
    }
  }, [axiosWithToken, id]);

  useEffect(() => {
    fetchData();
  }, [fetchData, accessToken]);

  return { detail, fetchData, setDetail, loading };
}

export default useFetchFlashcardSetDetail;
