import React from 'react';
import { Breadcrumb } from '../../../components/ui';
import CourseTrack from './CourseTrack';

// You should use this in every detail page in feature course
const DetailContainer = ({ children }) => {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="px-6 md:px-8 lg:px-[100px] mt-6">
        <Breadcrumb hierarchy={['IELTS Fundamentals', 'Past tenses', 'Hiện tại']} />
      </div>

      {/* Main  */}
      <div className="flex mt-6 justify-between mr-4">
        <div className="">{children}</div>

        {/* Course Track */}
        <div className="flex-grow-0 flex-shrink-0 basis-[30%]">
          <CourseTrack />
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
