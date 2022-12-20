import React from 'react';
import { BestWishes, DetailHeader } from '../components';
import useCountdown from './hooks/useCountdown';

const LessonFlashcard = ({ lesson, callback }) => {
  useCountdown(60, callback);

  return (
    <>
      {/* Text */}
      <div className="px-6 md:px-8 lg:px-[100px] pb-16">
        <DetailHeader
          title={lesson.name}
          date={lesson.updatedAt.slice(8, 10)}
          month={lesson.updatedAt.slice(5, 7)}
          year={lesson.updatedAt.slice(0, 4)}
        />
        <div className="text-t_gray mt-4">{lesson.description}</div>
        <div className="mt-[60px]"></div>
        {lesson.flashcardSetId}
        <BestWishes />
      </div>
    </>
  );
};

export default LessonFlashcard;
