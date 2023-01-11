import { Pagination } from 'components/ui';
import Container from 'layouts/components/Container';
import React, { useState } from 'react';
import FlashcardSetDetailHeader from './FlashcardSetDetailHeader';

import FlashcardSingle from './FlashcardSingle';

const FLASHCARD_LIST = [{}, { learned: true }];

const FlashcardSetDetail = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <div className="flex justify-center">
        <div className="max-w-[820px] my-8">
          <FlashcardSetDetailHeader />

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
      </div>
    </Container>
  );
};

export default FlashcardSetDetail;
