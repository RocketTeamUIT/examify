// import component:
import { Tag } from '../../../components/ui';
import { RatingStar } from '../../../components/ui';
// import icon:
import { AiOutlineTeam } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';
// import hook:
import { useState, useEffect, memo } from 'react';
// import data:
import { joinCourse } from '../data';
import classNames from 'classnames';

function CourseItem({ course, onClick, grid }) {
  const [listCourseUserJoin, setListCourseUserJoin] = useState([]);

  useEffect(() => {
    // get list course user joined:
    setListCourseUserJoin(
      joinCourse.reduce((acc, curr) => {
        return acc.concat(curr.courseId);
      }, []),
    );
  }, []);

  // Check if the Course is on the list Course user joined:
  const checkJoinCourse = (joinList = [], courseId) => {
    return joinList.includes(courseId);
  };

  return (
    <div className={classNames('mb-5 shadow-2xl rounded-lg relative md:shadow-none', grid && 'lg:col-span-full')}>
      {/* Check to add Pro icon for Course Charges*/}
      {course.charges && (
        <div className="w-[30px] h-[30px] rounded-md bg-slate-700 shadow-md flex absolute left-2 top-2">
          <FaCrown className="text-ac_yellow m-auto" />
        </div>
      )}

      <div className={classNames(grid && 'lg:flex gap-10')}>
        {/* Course Image */}
        <div
          className={classNames('cursor-pointer shadow-lg overflow-hidden rounded-lg', grid && 'lg:max-w-[216px]')}
          onClick={() => onClick(course)}
        >
          <img className="w-full h-full object-cover" src={course.img} alt="name" />
        </div>

        <div className="px-4 md:px-1 pb-4 flex-1">
          {/* Course name */}
          <h3 className="text-body-md font-medium mt-4 cursor-pointer" onClick={() => onClick(course)}>
            {course.name}
          </h3>

          <div className="mt-2 md:flex md justify-between md:mt-4">
            <div className="flex items-center gap-1 md:flex-col md:items-start">
              {/* Average rating info */}
              <RatingStar avg={course.avgRating} />
              {/* Rating quantity info  */}
              <p>({course.qntRating} đánh giá)</p>
            </div>

            {/* User joined info */}
            <div className={classNames('flex items-center text-body-sm mt-2', grid && 'lg:hidden')}>
              <AiOutlineTeam className="text-[24px] mr-1" />
              <p className="text-t_gray">
                <b className="text-black">{course.participants}</b> người tham gia
              </p>
            </div>
          </div>

          <div className="mt-2 md:flex md:justify-between md:items-end md:mt-4">
            {/* Point reward info */}
            <p className="text-t_gray text-body-sm">
              <b className="text-[#EF3737]">{course.pointComplete}</b> điểm khi hoàn thành
            </p>

            {grid && (
              <div className="hidden lg:flex items-center text-body-sm mt-2">
                <AiOutlineTeam className="text-[24px] mr-1" />
                <p className="text-t_gray">
                  <b className="text-black">{course.participants}</b> người tham gia
                </p>
              </div>
            )}

            {/* Check User joined course */}
            {checkJoinCourse(listCourseUserJoin, String(course.id)) ? (
              <div className="mt-5 md:mt-0 flex flex-shrink-0 justify-end ml-5">
                <Tag color="green">đã tham gia</Tag>
              </div>
            ) : // Check the Course using Paid method or Points to unlock
            course.charges ? (
              <div className="mt-5 md:mt-0 flex items-center justify-end gap-1 text-[#EF3737] text-body-md font-semibold">
                <BiLock className="text-[20px]" />
                <p>{course.price}đ</p>
              </div>
            ) : (
              <div className="mt-5 md:mt-0 flex items-center justify-end gap-0.5 text-primary text-body-md font-semibold">
                <BiLock className="text-[20px]" />
                <p>{course.pointUnlock} điểm</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CourseItem);
