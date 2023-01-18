import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFlashcardSetDetailService } from '../services/flashcard';

function useFetchFlashcardSetDetail(id) {
  const [detail, setDetail] = useState({});
  const axiosWithToken = useAxiosWithToken();
  const { accessToken } = useSelector((store) => store.auth);

  const fetchData = useCallback(async () => {
    try {
      const response = await getFlashcardSetDetailService({ id, axios: axiosWithToken });
      setDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [axiosWithToken, id]);

  useEffect(() => {
    fetchData();
  }, [fetchData, accessToken]);

  return { detail, fetchData, setDetail };
}

export default useFetchFlashcardSetDetail;
