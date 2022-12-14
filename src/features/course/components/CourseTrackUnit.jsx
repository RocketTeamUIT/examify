import classNames from 'classnames';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import CourseTrackLesson from './CourseTrackLesson';

const CourseTrackUnit = ({ unit }) => {
  const [expand, setExpand] = useState(false);
  const { lessonId } = useParams();

  const lessonList = useMemo(() => unit.lessonList || [], [unit.lessonList]);

  useEffect(() => {
    if (lessonList.find((lesson) => lesson.id === Number(lessonId))) {
      setExpand(true);
    }
  }, [lessonList, lessonId]);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <>
      <li
        className={classNames(
          'h-[60px] px-6 text-lg text-t_dark border-b border-br_gray flex items-center justify-between cursor-pointer transition relative bg-bg_light_gray_4 font-bold',
        )}
        onClick={handleExpand}
      >
        {unit.name}
        <TbChevronDown className={classNames(expand && 'rotate-180', 'transition-all')} />
      </li>

      {expand && lessonList.map((lesson, index) => <CourseTrackLesson key={index} lesson={lesson} />)}
    </>
  );
};

export default CourseTrackUnit;
