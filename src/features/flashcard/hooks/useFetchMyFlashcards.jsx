import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMyFlashcardService } from '../services/flashcard';

const useFetchMyFlashcards = () => {
  const [flashcardSets, setFlashcardSets] = useState({});
  const axios = useAxiosWithToken();
  const { accessToken } = useSelector((store) => store.auth);

  function addSet(set) {
    setFlashcardSets({
      ...flashcardSets,
      sets: [...flashcardSets.sets, set],
    });
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await getMyFlashcardService({ axios });
        setFlashcardSets(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axios, accessToken]);

  return { flashcardSets, addSet };
};

export default useFetchMyFlashcards;
