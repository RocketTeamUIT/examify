import classNames from 'classnames';
import React, { useState } from 'react';
import { Breadcrumb } from '../../../components/ui';
import CourseTrack from './CourseTrack';
import MoveLessonActionBar from './MoveLessonActionBar';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// You should use this in every detail page in feature course
const DetailContainer = ({
  children,
  totalLesson,
  name,
  chapterList,
  hierarchy,
  // isNextChapterAvailable,
}) => {
  const { courseId, lessonId } = useParams();
  const [showTrack, setShowTrack] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const linearLessonList = useMemo(() => {
    let lessonList = [];
    chapterList.forEach((chapter) => {
      (chapter.unitList || []).forEach((unit) => {
        (unit.lessonList || []).forEach((lesson) => {
          lessonList.push({
            chapterId: chapter.id,
            lessonId: lesson.id,
          });
        });
      });
    });
    return lessonList;
  }, [chapterList]);

  useEffect(() => {
    linearLessonList.forEach((lesson, index) => {
      if (lesson.lessonId === Number(lessonId)) {
        setIndex(index);
      }
    });
  }, [linearLessonList, lessonId]);

  const toggleTrack = () => {
    setShowTrack((prev) => !prev);
  };

  const isPreviousDisable = () => {
    return index === 0;
  };

  const isNextDisable = () => {
    if (index + 1 <= linearLessonList.length - 1) return false;
    // if (isNextChapterAvailable()) return false;
    return true;
  };

  const handleMove = (value) => {
    const newIndex = index + value;
    if (newIndex > linearLessonList.length - 1 || newIndex < 0) return;
    navigate(
      `/courses/${courseId}/detail/list-chapter/${linearLessonList[newIndex].chapterId}/lesson/${linearLessonList[newIndex].lessonId}`,
    );
  };

  return (
    <div className="w-full flex justify-between mr-3 fixed top-[60px] bottom-0">
      {/* Main content */}
      <div className="flex-1 h-[calc(100%-60px)] overflow-y-overlay">
        {/* Breadcrumb */}
        <div className="px-6 md:px-8 lg:px-16 xl:px-[100px] h-[60px] flex items-center">
          <Breadcrumb hierarchy={hierarchy || []} />
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
          'flex-shrink-0 w-full md:w-1/2 lg:max-w-[400px] h-full absolute lg:static right-0 bottom-0 top-0 lg:opacity-100 lg:pointer-events-auto transition',
          !showTrack && 'opacity-0 pointer-events-none',
        )}
      >
        <CourseTrack totalLesson={totalLesson} chapterList={chapterList} name={name} />
      </div>

      {/* Move Lesson Action Bar */}
      <MoveLessonActionBar
        isNextDisable={isNextDisable}
        isPreviousDisable={isPreviousDisable}
        toggle={toggleTrack}
        onMove={handleMove}
      />
    </div>
  );
};

DetailContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default DetailContainer;
