import React, { useState } from 'react';
import { Button } from '../../../components/ui';
import { BiHelpCircle } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import CourseTrackChapter from './CourseTrackChapter';
import Note from '../../note';
import { useSelector } from 'react-redux';

const CourseTrack = ({ totalLesson, name, chapterList }) => {
  const [showNote, setShowNote] = useState(false);
  const { courseId } = useParams();
  const { totalLearnedLessons } = useSelector((store) => store.course);
  const learnedPercent = useMemo(() => {
    return (totalLearnedLessons || 0) / (totalLesson || 1);
  }, [totalLearnedLessons, totalLesson]);

  const show = () => {
    setShowNote((prev) => true);
  };

  return (
    <div className="rounded-b-[4px] bg-white h-full">
      {/* Track header */}
      <div className="bg-ac_lighter_blue rounded-[4px] h-[60px] shadow-sd_small flex items-center justify-between">
        {/* Progress bar */}
        <div className="text-sm text-white ml-4 flex items-center">
          {/* Circular border */}
          <div
            className="flex items-center justify-center h-[30px] w-[30px] rounded-full relative progress-wrapper"
            style={{
              '--border-color': '#333',
              '--degree': Math.round(learnedPercent * 360) + 'deg',
            }}
          >
            {/* Percentage number */}
            <span className="text-[9px] font-bold w-[26px] h-[26px] rounded-full bg-ac_lighter_blue flex items-center justify-center">
              {Math.round(learnedPercent * 100)}%
            </span>
          </div>

          {/* Learnt lessons count */}
          <span className="font-bold text-white ml-[6px]">
            {totalLearnedLessons || 0}/{totalLesson}&nbsp;
          </span>
          <span>bài học</span>
        </div>

        {/* Button: Guide */}
        <Button type="text" dark unbold className="text-sm" leftIcon={<BiHelpCircle className="text-[1.125rem]" />}>
          Hướng dẫn
        </Button>

        {/* Button: Note */}
        <Button type="text" dark unbold className="text-sm" leftIcon={<CgNotes className="text-lg" />} onClick={show}>
          Ghi chú
        </Button>
      </div>

      {/* Track body */}
      <div
        className="border-b-2 border-x-2 border-t_light_gray rounded-b-[4px] flex flex-col overflow-auto h-[calc(100%-120px)]"
        id="course-track-body"
      >
        {/* Lesson List */}
        <h2 className="text-h4 font-bold py-5 px-5 text-primary">{name}</h2>

        <ul>
          {(chapterList || []).map((chapter, index) => (
            <CourseTrackChapter key={index} seq={index + 1} chapter={chapter} />
          ))}
        </ul>

        {/* Course Track Progress Bar */}
        <div className="flex flex-col px-6">
          <h5 className="font-semibold text-h5 mt-5">Tiến độ hoàn thành khoá học</h5>

          {/* Progress bar */}
          <div className="text-sm mx-auto py-6 text-white flex items-center">
            {/* Circular border */}
            <div
              className="flex items-center justify-center h-[80px] w-[80px] rounded-full relative progress-wrapper"
              style={{
                '--border-color': '#208AFF',
                '--degree': Math.round(learnedPercent * 360) + 'deg',
              }}
            >
              {/* Percentage number */}
              <span className="text-[1.125rem] font-semibold w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center text-ac_lighter_blue">
                {Math.round(learnedPercent * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Button: Return back to courses */}
        <Link
          to={`/courses/${courseId}/detail/list-chapter`}
          className="text-lg text-t_gray px-11 gap-3 mt-auto h-[60px] flex items-center border-t border-[#ccc] cursor-pointer hover:bg-bg_light_gray transition flex-shrink-0"
        >
          <HiArrowNarrowLeft className="h-6 w-6" />
          Quay lại khoá học
        </Link>
      </div>

      <Note showing={showNote} setShowing={setShowNote} />
    </div>
  );
};

export default CourseTrack;
