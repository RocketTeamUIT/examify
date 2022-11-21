import React from 'react';
import { BestWishes, DetailContainer, DetailHeader } from '../components';
import ReactMarkdown from 'react-markdown';

const CourseDetailLessonText = () => {
  return (
    <DetailContainer>
      {/* Main */}
      <div className="px-6 md:px-8 lg:px-[100px] pb-16">
        <DetailHeader />

        {/* Lesson Text content */}
        <div className="mt-[60px]"></div>

        <ReactMarkdown className="text-md">Hello, *World!*</ReactMarkdown>

        <BestWishes />
      </div>
    </DetailContainer>
  );
};

export default CourseDetailLessonText;
