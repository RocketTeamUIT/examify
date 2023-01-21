import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFlashcardShareListService } from '../services/flashcard';

const useFetchFlashcardShare = (flashcardSetId) => {
  const [shareList, setShareList] = useState([]);
  const axios = useAxiosWithToken();
  const { accessToken } = useSelector((store) => store.auth);

  useEffect(() => {
    (async () => {
      try {
        if (!flashcardSetId || !accessToken) return;
        const response = await getFlashcardShareListService({ axios, flashcardSetId });
        setShareList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axios, accessToken, flashcardSetId]);

  return { shareList, setShareList };
};

export default useFetchFlashcardShare;
