import React from 'react';
import { DetailHeader } from '../components';
import useCountdown from './hooks/useCountdown';
import '../../../assets/css/lesson_text.css';
const LessonText = ({ lesson, callback }) => {
  useCountdown(60, callback);

  return (
    <>
      {/* Main */}
      <div className="px-6 md:px-8 lg:px-[100px] pb-16">
        <DetailHeader
          title={lesson.name}
          date={lesson.updatedAt.slice(8, 10)}
          month={lesson.updatedAt.slice(5, 7)}
          year={lesson.updatedAt.slice(0, 4)}
        />

        {/* Lesson Text content */}
        <div className="text-t_gray mt-4">{lesson.description}</div>
        <div className="mt-[60px]"></div>
        <div
          className="space-y-5 lesson-detail"
          dangerouslySetInnerHTML={{
            __html: lesson.text,
          }}
        ></div>
      </div>
    </>
  );
};

export default LessonText;
