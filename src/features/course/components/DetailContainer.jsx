import React from 'react';
import { Breadcrumb } from '../../../components/ui';
import CourseTrack from './CourseTrack';

// You should use this in every detail page in feature course
const DetailContainer = ({ children }) => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="px-6 md:px-8 lg:px-[100px] mt-6">
        <Breadcrumb hierarchy={['IELTS Fundamentals', 'Past tenses', 'Hiện tại']} />
      </div>

      {/* Main  */}
      <div className="flex mt-6">
        <div className="flex-shrink">{children}</div>

        <div className="flex-grow min-w-[350px] w-[400px]">
          <CourseTrack />
        </div>
      </div>
    </>
  );
};

export default DetailContainer;
