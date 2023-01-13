import { Filter } from 'components/ui';
import React from 'react';
import FlashcardSetList from './FlashcardSetList';

const CATEGORIZED_FLASHCARD_SETS = ['IELTS', 'TOEIC'];

const ExploreFlashcard = () => {
  return (
    <div className="mt-10 mb-[60px]">
      <Filter hideGrid placeholder="Tìm bộ Flashcard..." />

      <div className="space-y-12 mt-11">
        {CATEGORIZED_FLASHCARD_SETS.map((category, index) => (
          <div className="space-y-4">
            <h3 className="font-bold text-h3">{category}</h3>
            <FlashcardSetList hideCreate />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFlashcard;
