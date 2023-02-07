import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useCallback, useEffect, useState } from 'react';
import { getPracticeFlashcardService } from '../services/flashcard';

const useFetchPracticeFlashcard = (flashcardSetId) => {
  const [flashcard, setFlashcard] = useState({});
  const axios = useAxiosWithToken();

  const fetchData = useCallback(async () => {
    try {
      const response = await getPracticeFlashcardService({ axios, flashcardSetId });
      setFlashcard(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [axios, flashcardSetId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { flashcard, fetchData };
};

export default useFetchPracticeFlashcard;
