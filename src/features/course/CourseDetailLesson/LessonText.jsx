import React from 'react';
import { BestWishes, DetailHeader } from '../components';
import ReactMarkdown from 'react-markdown';
const LessonText = ({ text }) => {
  return (
    <>
      {/* Main */}
      <div className="px-6 md:px-8 lg:px-[100px] pb-16">
        <DetailHeader />

        {/* Lesson Text content */}
        <div className="mt-[60px]"></div>
        <ReactMarkdown className="text-md">{text}</ReactMarkdown>

        <BestWishes />
      </div>
    </>
  );
};

export default LessonText;
