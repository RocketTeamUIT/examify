import { Tag } from '../../../../components/ui';
import { AiOutlineTeam, AiFillStar } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';

import { joinCourse } from '../data';
import { useState, useEffect, memo } from 'react';

function CourseItem({ course, onClick }) {
  const [listCourseUserJoin, setListCourseUserJoin] = useState([]);

  useEffect(() => {
    setListCourseUserJoin(
      joinCourse.reduce((acc, curr) => {
        return acc.concat(curr.courseId);
      }, []),
    );
  }, []);

  // Fill star Rating:
  const FillStar = (avgRate, num) => {
    return Math.round(avgRate) < num ? (
      <AiFillStar className="text-t_light_gray_3" />
    ) : (
      <AiFillStar className="text-ac_yellow" />
    );
  };

  // Check course in list:
  const CheckJoinCourse = (joinList = [], courseId) => {
    return joinList.includes(courseId);
  };

  return (
    <div className="mb-5 shadow-2xl rounded-lg relative md:shadow-none">
      {/* Check add icon for Course Charges*/}
      {course.charges && (
        <div className="w-[30px] h-[30px] rounded-md bg-slate-700 shadow-md flex absolute left-2 top-2">
          <FaCrown className="text-ac_yellow m-auto" />
        </div>
      )}
      <div className="cursor-pointer shadow-lg overflow-hidden rounded-lg" onClick={() => onClick(course)}>
        <img className="w-full" src={course.img} alt="name" />
      </div>
      <div className="px-1 pb-4">
        <h3 className="text-body-md font-medium mt-4 cursor-pointer" onClick={() => onClick(course)}>
          {course.name}
        </h3>
        <div className="mt-2 md:flex md justify-between md:mt-4">
          <div className="flex items-center gap-1 md:flex-col md:items-start">
            <div className="flex">
              {FillStar(course.avgRating, 1)}
              {FillStar(course.avgRating, 2)}
              {FillStar(course.avgRating, 3)}
              {FillStar(course.avgRating, 4)}
              {FillStar(course.avgRating, 5)}
            </div>
            <p>({course.qntRating} đánh giá)</p>
          </div>
          <div className="flex items-center text-body-sm mt-2">
            <AiOutlineTeam className="text-[24px] mr-1" />
            <p className="text-t_gray">
              <b className="text-black">{course.participants}</b> người tham gia
            </p>
          </div>
        </div>
        <div className="mt-2 md:flex md:justify-between md:items-end md:mt-4">
          <p className="text-t_gray text-body-sm">
            <b className="text-[#EF3737]">{course.pointComplete}</b> điểm khi hoàn thành
          </p>
          {/* Check User joined course */}
          {CheckJoinCourse(listCourseUserJoin, String(course.id)) ? (
            <div className="flex flex-shrink-0 justify-end ml-5">
              <Tag color="green">đã tham gia</Tag>
            </div>
          ) : course.charges ? (
            <div className="mt-4 md:mt-0 flex items-center justify-end gap-1 text-[#EF3737] text-body-md font-semibold">
              <BiLock className="text-[20px]" />
              <p>{course.price}đ</p>
            </div>
          ) : (
            <div className="mt-4 md:mt-0 flex items-center justify-end gap-0.5 text-primary text-body-md font-semibold">
              <BiLock className="text-[20px]" />
              <p>{course.pointUnlock} điểm</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(CourseItem);
