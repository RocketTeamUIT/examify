import { Pagination } from 'components/ui';
import Container from 'layouts/components/Container';
import React, { useState } from 'react';
import AddFlashcardModal from './AddFlashcardModal';
import AddMultipleFlashcardsModal from './AddMultipleFlashcardsModal';
import FlashcardSetDetailHeader from './FlashcardSetDetailHeader';

import FlashcardSingle from './FlashcardSingle';
import ShareFlashcardModal from './ShareFlashcardModal';

const FLASHCARD_LIST = [{}, { learned: true }];

const FlashcardSetDetail = () => {
  const [selected, setSelected] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showAddMultiple, setShowAddMultiple] = useState(false);

  const toggleShareModal = () => {
    setShowShare((prev) => !prev);
  };

  const toggleAddModal = () => {
    setShowAdd((prev) => !prev);
  };

  const toggleAddMultipleModal = () => {
    setShowAddMultiple((prev) => !prev);
  };

  return (
    <Container>
      <div className="flex justify-center">
        <div className="max-w-[820px] my-8">
          <FlashcardSetDetailHeader
            showShareModal={toggleShareModal}
            showAddModal={toggleAddModal}
            showAddMultipleModal={toggleAddMultipleModal}
          />

          <div className="border-t w-full border-br_gray my-6" />

          <ul className="space-y-8">
            {FLASHCARD_LIST.map((flashcard, index) => (
              <FlashcardSingle {...flashcard} key={index} />
            ))}
          </ul>

          <div className="flex justify-center mt-7">
            <Pagination length={10} selected={selected} setSelected={setSelected} />
          </div>
        </div>

        <AddFlashcardModal isShowing={showAdd} hide={toggleAddModal} />
        <AddMultipleFlashcardsModal isShowing={showAddMultiple} hide={toggleAddMultipleModal} />
        <ShareFlashcardModal isShowing={showShare} hide={toggleShareModal} />
      </div>
    </Container>
  );
};

export default FlashcardSetDetail;
