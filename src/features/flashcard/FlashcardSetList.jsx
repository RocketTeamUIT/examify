import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import FlashcardSet from './FlashcardSet';

const FlashcardSetList = ({ hideCreate }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {!hideCreate && (
        <div className="h-[216px] rounded-lg shadow-sd_large flex flex-col text-primary items-center justify-center cursor-pointer transition hover:bg-bg_light_gray_5">
          <AiOutlinePlus className="h-5 w-5" />
          <p className="font-semibold mt-2">Thêm bộ Flashcard mới</p>
        </div>
      )}

      <FlashcardSet />
      <FlashcardSet />
      <FlashcardSet />
      <FlashcardSet />
    </div>
  );
};

export default FlashcardSetList;