import { useEffect, useState } from 'react';
import { getAllFlashcardTypesService } from '../services/flashcard';

function useFetchFlashcardTypes() {
  const [flashcardTypes, setFlashcardTypes] = useState([]);

  useEffect(() => {
    const fetchFlashcardTypes = async () => {
      try {
        const response = await getAllFlashcardTypesService();
        setFlashcardTypes(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlashcardTypes();
  }, []);

  return { flashcardTypes };
}

export default useFetchFlashcardTypes;
