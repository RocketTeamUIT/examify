import classNames from 'classnames';
import React, { useState } from 'react';
import { Breadcrumb } from '../../../components/ui';
import CourseTrack from './CourseTrack';
import MoveLessonActionBar from './MoveLessonActionBar';
import PropTypes from 'prop-types';

// You should use this in every detail page in feature course
const DetailContainer = ({ children }) => {
  const [showTrack, setShowTrack] = useState(false);

  const toggleTrack = () => {
    setShowTrack(!showTrack);
  };

  return (
    <div className="w-full flex justify-between mr-3 fixed top-[60px] bottom-0">
      {/* Main content */}
      <div className="flex-1 h-[calc(100%-60px)] overflow-y-overlay">
        {/* Breadcrumb */}
        <div className="px-6 md:px-8 lg:px-16 xl:px-[100px] h-[60px] flex items-center">
          <Breadcrumb hierarchy={['IELTS Fundamentals', 'Past tenses', 'Hiện tại']} />
        </div>

        {children}
      </div>

      {/* Overlay */}
      <div
        className={classNames(
          'top-0 left-0 right-0 bottom-0 transition fixed lg:bg-opacity-0 lg:pointer-events-none',
          showTrack ? 'bg-black bg-opacity-20 pointer-events-auto' : 'bg-opacity-0 pointer-events-none',
        )}
        onClick={() => setShowTrack(false)}
      />

      {/* Course Track */}
      <div
        className={classNames(
          'flex-shrink-0 w-full md:w-1/2 lg:max-w-[400px] h-full absolute lg:static bottom-0 top-0 lg:opacity-100 lg:pointer-events-auto transition',
          !showTrack && 'opacity-0 pointer-events-none',
        )}
      >
        <CourseTrack />
      </div>

      {/* Move Lesson Action Bar */}
      <MoveLessonActionBar toggle={toggleTrack} />
    </div>
  );
};

DetailContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default DetailContainer;
