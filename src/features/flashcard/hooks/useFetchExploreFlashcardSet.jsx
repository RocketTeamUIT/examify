import { useEffect, useState } from 'react';
import { getAllExploreFlashcardSetService } from '../services/flashcard';

const useFetchExploreFlashcardSet = () => {
  const [flashcardSets, setFlashcardSets] = useState([]);

  useEffect(() => {
    const fetchFlashcardSet = async () => {
      try {
        const response = await getAllExploreFlashcardSetService();
        setFlashcardSets(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlashcardSet();
  }, []);

  return { flashcardSets };
};

export default useFetchExploreFlashcardSet;
