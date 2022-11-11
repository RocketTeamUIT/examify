// import Classname:
import classNames from 'classnames';
import { memo } from 'react';
import TickItem from './TickItem';

function CourseInfo({ course }) {
  return (
    <>
      <h3 className="text-body-lg text-center font-medium mb-4 lg:text-left lg:mb-8">Thông tin khóa học</h3>
      {/* Author info */}
      <div>
        <p className="font-medium">
          <i>Bài học được biên soạn và giảng dạy bởi nhóm tác giả:</i>
        </p>
        {/* List authors */}
        <ul className="list-disc pl-5 text-body-md font-normal mt-3">
          {course?.authors?.map((author) => (
            <li key={author?.id} className="mt-2">
              {author.content}
            </li>
          ))}
        </ul>
      </div>

      {/* Target Users info */}
      <div className="mt-8">
        <p className="font-medium">
          <i>Nhóm đối tượng tham gia khóa học:</i>
        </p>
        {/* List target users */}
        <ul className="text-body-md font-normal mt-3 grid gap-3">
          {course?.targetUsers?.map((target) => (
            <TickItem key={target?.id}>{target?.content}</TickItem>
          ))}
        </ul>
      </div>

      {/* Skill info */}
      <div className="mt-8">
        <p className="font-medium">
          <i>Khóa học bổ trợ các kỹ năng:</i>
        </p>
        {/* List skill */}
        <ul className="text-body-md font-normal mt-3 grid gap-3">
          {course?.skills?.map((skill) => (
            <TickItem key={skill?.id}>{skill?.content}</TickItem>
          ))}
        </ul>
      </div>

      {/* Other info */}
      <div className="mt-8">
        <p className="font-medium">
          <i>Tổng quan:</i>
        </p>
        <ul className="list-disc pl-5 text-body-md font-normal mt-3">
          {/* Level course info */}
          <li className="mt-2">
            Mức độ:
            <b
              // Style for type of level
              className={classNames({
                'text-ac_blue': course?.level === 'basic',
                'text-ac_orange': course?.level === 'general',
                'text-ac_red': course?.level === 'advance',
              })}
            >
              {/* Check level */}
              {course?.level === 'basic' && 'cơ bản'}
              {course?.level === 'general' && 'phổ thông'}
              {course?.level === 'advance' && 'nâng cao'}
            </b>
          </li>

          {/* List  other info  */}
          {course?.other?.map((info) => (
            <li key={info?.id} className="mt-2">
              {info?.content}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default memo(CourseInfo);
