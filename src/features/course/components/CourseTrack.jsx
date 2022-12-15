import React, { useState } from 'react';
import { Button } from '../../../components/ui';
import { BiHelpCircle } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { IoIosCheckmarkCircle, IoIosPlayCircle, IoIosLock } from 'react-icons/io';
import { AiOutlineFileText } from 'react-icons/ai';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const temp = {
  learntCount: 69,
  total: 106,
};

const CourseTrack = ({ index, handleClick, lessons }) => {
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
            {temp.learntCount}/{temp.total}&nbsp;
          </span>
          <span>bài học</span>
        </div>

        {/* Button: Guide */}
        <Button type="text" dark unbold className="text-sm" leftIcon={<BiHelpCircle className="text-[1.125rem]" />}>
          Hướng dẫn
        </Button>

        {/* Button: Note */}
        <Button type="text" dark unbold className="text-sm" leftIcon={<CgNotes className="text-lg" />}>
          Ghi chú
        </Button>
      </div>

      {/* Track body */}
      <div className="border-b-2 border-x-2 border-t_light_gray rounded-b-[4px] flex flex-col overflow-auto h-[calc(100%-120px)]">
        {/* Title */}
        <h4 className="text-h4 font-semibold py-5 px-6">IELTS Fundamentals</h4>

        {/* Lesson List */}
        <ul>
          {lessons.map((l, i) => (
            <li
              key={i}
              className={classNames(
                'h-[60px] pl-11 text-lg text-t_dark border-t border-b border-bg_light_gray flex items-center  cursor-pointer transition relative',
                index === i && 'bg-ac_blue bg-opacity-10',
                !l.unlock && 'bg-bg_light_gray_2 opacity-50 cursor-default',
              )}
              onClick={() => handleClick(i)}
            >
              {/* Lesson type icon */}
              <div className="w-[25px] h-[25px] flex items-center justify-center rounded-lg bg-[#d9d9d9] bg-opacity-30 mr-2">
                {l.type === 'Video' ? (
                  <IoIosPlayCircle className="text-t_light_gray_2" />
                ) : (
                  <AiOutlineFileText className="text-t_gray" />
                )}
              </div>

              {/* Lesson type, title */}
              <span className="font-bold">{l.type}:&nbsp;</span>
              {l.title}

              {/* Done/Locked lesson icon */}
              <div className="ml-auto mr-6 pl-2">
                {l.unlock ? (
                  <IoIosCheckmarkCircle className="w-[25px] h-[25px] text-ac_green" />
                ) : (
                  <IoIosLock className="w-[25px] h-[25px] text-t_gray" />
                )}
              </div>

              {/* Selected lesson blue line */}
              {index === i && <div className="bg-ac_lighter_blue h-full w-[6px] right-0 absolute"></div>}
            </li>
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
                '--degree': Math.round((temp.learntCount / temp.total) * 360) + 'deg',
              }}
            >
              {/* Percentage number */}
              <span className="text-[1.125rem] font-semibold w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center text-ac_lighter_blue">
                {Math.round((temp.learntCount / temp.total) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Button: Return back to courses */}
        <Link
          to="/courses"
          className="text-lg text-t_gray px-11 gap-3 mt-auto h-[60px] flex items-center border-t border-[#ccc] cursor-pointer hover:bg-bg_light_gray transition flex-shrink-0"
        >
          <HiArrowNarrowLeft className="h-6 w-6" />
          Quay lại khoá học
        </Link>
      </div>
    </div>
  );
};

export default CourseTrack;
