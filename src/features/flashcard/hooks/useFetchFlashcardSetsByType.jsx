import { useEffect, useState } from 'react';
import { getFlashcardSetsByTypeService } from '../services/flashcard';

function useFetchFlashcardSetsByType() {
  const [flashcardSets, setFlashcardSets] = useState([]);

  useEffect(() => {
    const fetchFlashcardSets = async () => {
      try {
        const response = await getFlashcardSetsByTypeService();
        setFlashcardSets(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlashcardSets();
  }, []);

  return { flashcardSets };
}

export default useFetchFlashcardSetsByType;
