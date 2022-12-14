import classNames from 'classnames';
import React from 'react';
import { AiFillFileText } from 'react-icons/ai';
import { MdSlowMotionVideo } from 'react-icons/md';
import { RiSimCardLine } from 'react-icons/ri';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

const CourseTrackLesson = ({ lesson }) => {
  const { courseId, chapterId, lessonId } = useParams();
  const { name, type, done, id } = lesson;
  const navigate = useNavigate();

  return (
    <li
      className={classNames(
        'h-[60px] pl-6 text-t_dark flex items-center cursor-pointer transition relative hover:bg-primary hover:bg-opacity-10 text-md',
      )}
      onClick={() => navigate(`/courses/${courseId}/detail/list-chapter/${chapterId}/lesson/${id}`)}
    >
      {/* Lesson type icon */}
      <div className="w-[25px] h-[25px] flex items-center justify-center rounded-lg bg-[#d9d9d9] bg-opacity-30 mr-2">
        {type === 1 && <MdSlowMotionVideo className="text-t_gray" />}
        {type === 2 && <AiFillFileText className="text-t_gray" />}
        {type === 3 && <RiSimCardLine className="text-t_gray" />}
      </div>

      {name}

      {/* Done/Locked lesson icon */}
      {done && (
        <div className="ml-auto mr-6 pl-2">
          <IoIosCheckmarkCircle className="w-[25px] h-[25px] text-ac_green" />
        </div>
      )}

      {/* Selected lesson blue line */}
      {Number(lessonId) === id && <div className="bg-ac_lighter_blue h-full w-[6px] right-0 absolute"></div>}
    </li>
  );
};

export default CourseTrackLesson;
