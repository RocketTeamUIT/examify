import { Tag } from 'components/ui';
import React from 'react';
import { Link } from 'react-router-dom';

const FlashcardSet = () => {
  return (
    <Link
      className="h-[216px] border border-br_light_gray rounded-lg p-5 flex flex-col hover:bg-bg_light_gray_5 transition cursor-pointer"
      to="/flashcards/1"
    >
      <header className="flex justify-between items-center">
        <h3 className="font-bold">Động vật có xương sống</h3>
      </header>

      <p className="text-md mt-[9px] text-t_dark">16 từ</p>
      <p className="text-md mt-[9px] text-t_gray">Đây là bộ Flashcard bao gồm các loài động vật có xương sống. </p>

      <div className="flex justify-between items-center mt-auto">
        <Tag color="blue">Hệ thống</Tag>
        <p className="text-sm font-medium">IELTS</p>
      </div>
    </Link>
  );
};

export default FlashcardSet;
