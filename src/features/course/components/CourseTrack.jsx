import React, { useState } from 'react';
import { Button } from '../../../components/ui';
import { BiHelpCircle } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const temp = {
  learntCount: 12,
  total: 106,
};

const tempLessons = [
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
  { title: '[Vocabulary] Từ vựng theo chủ đề' },
];

const CourseTrack = () => {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="sticky top-16"
      style={{
        height: window.innerHeight - 64 + 'px',
      }}
    >
      {/* Track header */}
      <div className="bg-ac_lighter_blue rounded-[4px] h-[60px] shadow-lg flex items-center justify-between">
        {/* Progress bar */}
        <div className="text-sm text-white ml-4 flex items-center">
          {/* Circle */}
          <div
            className="flex items-center justify-center h-[30px] w-[30px] rounded-full relative progress-wrapper"
            style={{
              '--degree': Math.round((temp.learntCount / temp.total) * 360) + 'deg',
            }}
          >
            {/* Percentage number */}
            <span className="text-[9px] font-bold w-[26px] h-[26px] rounded-full bg-ac_lighter_blue flex items-center justify-center">
              {Math.round((temp.learntCount / temp.total) * 100)}%
            </span>
          </div>
          {/* Learnt lessons count */}
          <span className="font-bold text-white ml-[6px]">
            {temp.learntCount}/{temp.total}
          </span>
          &nbsp;bài học
        </div>

        {/* Guide button */}
        <Button type="text" dark unbold className="text-sm" leftIcon={<BiHelpCircle className="text-[1.125rem]" />}>
          Hướng dẫn
        </Button>

        {/* Note button */}
        <Button type="text" dark unbold className="text-sm" leftIcon={<CgNotes className="text-lg" />}>
          Ghi chú
        </Button>
      </div>

      {/* Track body */}
      <div className="px-4 border-2 border-t_light_gray rounded-b-[4px] h-[calc(100%-64px)] overflow-auto">
        {/* Title */}
        <h4 className="text-h4 font-semibold py-5">IELTS Fundamentals</h4>

        {/* Lesson List */}
        <ul>
          {tempLessons.map((l, i) => (
            <li
              key={i}
              className={classNames(
                'h-[60px] -mx-4 px-10 text-lg text-t_dark border-t border-b border-bg_light_gray flex items-center hover:bg-bg_light_gray cursor-pointer relative transition',
                index === i && 'bg-bg_light_gray',
              )}
              onClick={() => setIndex(i)}
            >
              {l.title}

              {/* Selected Bar */}
              {index === i && <div className="bg-ac_lighter_blue h-full w-[6px] absolute right-0"></div>}
            </li>
          ))}
        </ul>

        {/* Progress track */}
        <div className="flex flex-col">
          <h5 className="font-semibold text-h5 mt-5">Tiến độ hoàn thành khoá học</h5>

          <div className="mx-auto mt-3">abc</div>
        </div>

        {/* Return back to courses */}
        <Link
          to="/courses"
          className="text-lg text-t_gray px-11 -mx-4 gap-3 mt-4 h-[60px] flex items-center border-t border-bg_light_gray cursor-pointer hover:bg-bg_light_gray transition"
        >
          <HiArrowNarrowLeft className="h-6 w-6" />
          Quay lại khoá học
        </Link>
      </div>
    </div>
  );
};

export default CourseTrack;
