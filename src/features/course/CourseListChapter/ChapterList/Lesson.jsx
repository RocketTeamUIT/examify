import React from 'react';
import { AiFillFileText } from 'react-icons/ai';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdSlowMotionVideo } from 'react-icons/md';
import { RiSimCardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Lesson = ({ lesson, seq, to }) => {
  return (
    <Link to={to}>
      <div className="flex items-center h-[60px] bg-white rounded-md shadow-sd_medium cursor-pointer ml-8">
        <div className="flex-shrink-0 px-1 md:px-2">
          {lesson.type === 1 && <MdSlowMotionVideo className="text-t_gray" />}
          {lesson.type === 2 && <AiFillFileText className="text-t_gray" />}
          {lesson.type === 3 && <RiSimCardLine className="text-t_gray" />}
        </div>
        <h3 className="text-body-sm px-2 flex-1">
          {seq}. {lesson.name}
        </h3>
        <p className="flex-shrink-0 text-body-sm px-1 md:mr-3">{lesson.time}</p>

        {lesson.completed && (
          <div className="ml-auto mr-6 pl-2">
            <IoIosCheckmarkCircle className="w-[25px] h-[25px] text-ac_green" />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Lesson;
