import classNames from 'classnames';
import React from 'react';

const CourseProgress = ({ className, progress }) => {
  return (
    <>
      <p className="text-center mb-2">Tiến độ học tập: {progress}%</p>
      <div className={classNames('w-full h-2 bg-bg_light_gray_3 rounded-full relative', className)}>
        <div
          className="absolute h-2 bg-ac_blue rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </>
  );
};

export default CourseProgress;
