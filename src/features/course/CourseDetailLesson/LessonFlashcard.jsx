import React from 'react';
import { BestWishes } from '../components';

const LessonFlashcard = ({ flashcardSetId }) => {
  return (
    <>
      <div className="px-6 md:px-8 lg:px-16 xl:px-[100px]">LessonFlashcard</div>

      {/* Text */}
      <div className="px-6 md:px-8 lg:px-[100px] mt-8 pb-16">
        {flashcardSetId}
        <BestWishes />
      </div>
    </>
  );
};

export default LessonFlashcard;
