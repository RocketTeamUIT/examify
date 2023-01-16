import { Button, Tip } from 'components/ui';
import React from 'react';
import FlashcardSetList from './FlashcardSetList';

const MyFlashcard = () => {
  return (
    <div className="my-[60px]">
      <FlashcardSetList flashcardSets={[]} />

      <div className="mt-11">
        <Tip>
          Tips: Bạn có thể thêm một Flashcard mới bằng cách bôi đen (highlight) các từ trong trong trang web này.
        </Tip>
      </div>

      <div className="mt-11">
        <p className="font-semibold text-lg mb-4">Muốn tìm thêm những bộ Flashcard khác?</p>
        <Button>Khám phá ngay</Button>
      </div>
    </div>
  );
};

export default MyFlashcard;
