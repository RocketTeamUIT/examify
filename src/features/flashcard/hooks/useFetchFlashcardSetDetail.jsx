import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFlashcardSetDetailService } from '../services/flashcard';

function useFetchFlashcardSetDetail(id) {
  const [detail, setDetail] = useState({});
  const axiosWithToken = useAxiosWithToken();
  const { accessToken } = useSelector((store) => store.auth);

  useEffect(() => {
    const fetchFlashcardSetDetail = async () => {
      try {
        const response = await getFlashcardSetDetailService({ id, axios: axiosWithToken });
        setDetail(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlashcardSetDetail();
  }, [id, axiosWithToken, accessToken]);

  return { detail };
}

export default useFetchFlashcardSetDetail;
