import { memo } from 'react';
import { printPrice } from '../../../utils/formatCurrency';
import { RiTeamLine } from 'react-icons/ri';
import { FaCrown } from 'react-icons/fa';
import { ImCoinDollar } from 'react-icons/im';
import { Tag } from '../../../components/ui';
import { RatingStar } from '../../../components/ui';
import classNames from 'classnames';

function CourseItem({ course, onClick, grid }) {
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
          <img className="w-full h-full object-cover aspect-[5/4]" src={course.image} alt="name" />
        </div>

        <div className="px-4 md:px-1 pb-4  flex-1">
          {/* Course name */}
          <h3 className="text-body-md font-medium mt-4 cursor-pointer" onClick={() => onClick(course)}>
            {course.name}
          </h3>

          <div className="mt-2 md:flex md justify-between items-start md:mt-4">
            <div className="flex items-center gap-1 md:flex-col md:items-start">
              {/* Average rating info */}
              <RatingStar avg={course.avgRating} />
              {/* Rating quantity info  */}
              <p className="text-body-sm font-light">({course.quantityRating} đánh giá)</p>
            </div>

            {/* User joined info */}
            <div className="flex items-end text-body-sm mt-2 md:mt-0">
              <RiTeamLine className="text-[16px] mr-1 relative top-[-3px]" />
              <p className="text-t_gray">
                <b className="text-black">{course.participants}</b> người tham gia
              </p>
            </div>
          </div>

          <div className="mt-2 md:flex md:justify-between md:items-end md:mt-4">
            {/* Point reward info */}
            <p className="text-t_gray text-body-sm">
              <b className="text-ac_lighter_green">+ {course.pointReward}</b> điểm thưởng
            </p>

            {/* Check User joined course */}
            {course.isJoin ? (
              <div className="mt-5 md:mt-0 flex flex-shrink-0 justify-end ml-5">
                <Tag color="green">đã tham gia</Tag>
              </div>
            ) : // Check the Course using Paid method or Points to unlock
            course.charges ? (
              <div className="mt-5 md:mt-0 flex items-center justify-end gap-1 text-[#EF3737] text-body-sm font-bold">
                <ImCoinDollar className="text-[20px] text-ac_orange rounded-full shadow-md animate-[flip_3s_linear_infinite]" />
                <p>{printPrice(course.price)} đ</p>
              </div>
            ) : (
              <div className="mt-5 md:mt-0 flex items-center justify-end gap-0.5 text-primary text-body-sm font-bold">
                <ImCoinDollar className="text-[20px] animate-[flip_3s_linear_infinite]" />
                <p>{course.pointToUnlock} điểm</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CourseItem);
