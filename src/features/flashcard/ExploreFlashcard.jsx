import { Filter } from 'components/ui';
import React from 'react';
import FlashcardSetList from './FlashcardSetList';
import useFetchFlashcardSetsByType from './hooks/useFetchFlashcardSetsByType';

const ExploreFlashcard = () => {
  const { flashcardSets } = useFetchFlashcardSetsByType();

  return (
    <div className="mt-10 mb-[60px]">
      <Filter hideGrid placeholder="Tìm bộ Flashcard..." />

      <div className="space-y-12 mt-11">
        {flashcardSets.map((fcType) => (
          <div className="space-y-4" key={fcType.fc_type_id}>
            <h3 className="font-bold text-h3">{fcType.type}</h3>
            <FlashcardSetList flashcardSets={fcType.fc_set} hideCreate />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFlashcard;
