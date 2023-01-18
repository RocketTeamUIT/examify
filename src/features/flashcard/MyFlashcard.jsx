import { Button, Tip } from 'components/ui';
import React from 'react';
import { Link } from 'react-router-dom';
import FlashcardSetList from './FlashcardSetList';
import useFetchMyFlashcards from './hooks/useFetchMyFlashcards';

const MyFlashcard = () => {
  const { flashcardSets, addSet } = useFetchMyFlashcards();

  return (
    <div className="my-[60px]">
      <FlashcardSetList flashcardSets={flashcardSets} addSet={addSet} />

      <div className="mt-11">
        <Tip>
          Tips: Bạn có thể thêm một Flashcard mới bằng cách bôi đen (highlight) các từ trong trong trang web này.
        </Tip>
      </div>

      <div className="mt-11">
        <p className="font-semibold text-lg mb-4">Muốn tìm thêm những bộ Flashcard khác?</p>
        <Link to="/flashcards/explore">
          <Button>Khám phá ngay</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyFlashcard;
