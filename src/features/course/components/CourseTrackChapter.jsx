import React from 'react';
import CourseTrackUnit from './CourseTrackUnit';

const CourseTrackChapter = ({ chapter, seq }) => {
  return (
    <>
      {/* Title */}
      <h4 className="font-semibold py-3 px-6 border-b bg-bg_dark_gray text-white border-br_gray">
        Chương {seq}: {chapter.name}
      </h4>
      {(chapter.unitList || []).map((l, i) => (
        <CourseTrackUnit seq={i + 1} unit={l} key={i} chapterId={chapter.id} />
      ))}
    </>
  );
};

export default CourseTrackChapter;
