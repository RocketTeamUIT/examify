import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFlashcardsInSetService } from '../services/flashcard';

function useFetchFlashcardsInSet(flashcardSetId, page, searchValue) {
  const [originFlashcards, setOriginFlashcards] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const axios = useAxiosWithToken();
  const { accessToken } = useSelector((store) => store.auth);

  const fetchData = useCallback(async () => {
    try {
      const response = await getFlashcardsInSetService({
        flashcardSetId,
        page,
        axios,
      });
      setOriginFlashcards(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [flashcardSetId, page, axios]);

  useEffect(() => {
    fetchData();
  }, [fetchData, accessToken]);

  useEffect(() => {
    setFlashcards(originFlashcards.filter((fc) => fc.word.toLowerCase().includes(searchValue.toLowerCase())));
  }, [originFlashcards, searchValue]);

  return { flashcards, fetchData };
}

export default useFetchFlashcardsInSet;
