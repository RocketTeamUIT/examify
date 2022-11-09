// import Classname:
import classNames from 'classnames';
// import hook:
import { useState } from 'react';
// import Component:
import Tag from '../../../../components/ui/Tag';
import SubNav from '../SubNav';
import Chapter from './Chapter';
import ModalRegisterCourse from './ModalRegisterCourse';
// import Icon:
import { AiFillStar, AiOutlineTeam } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
// import Image:
import bannerImg from '../../../../assets/images/courseDetailBanner.png';
// import Data:
import { courseDetail, chapters } from '../data';

// Declare TickItem component:
const TickItem = ({ children }) => (
  <li className="mt-2 flex gap-3 items-center">
    <div className="w-[24px] h-[24px] bg-ac_green flex flex-shrink-0 justify-center rounded-sm items-center">
      <TiTick className="text-white" />
    </div>
    <p>{children}</p>
  </li>
);

function CourseDetail() {
  const [openAll, setOpenAll] = useState(false);

  // Fill color for Star rating icon:
  const fillStar = (avgRate, num) => {
    return Math.round(avgRate) < num ? (
      <AiFillStar className="text-t_light_gray_3" />
    ) : (
      <AiFillStar className="text-ac_yellow" />
    );
  };

  return (
    <div className="mb-20">
      <div className="relative">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
        {/* SubNav component */}
        <SubNav />

        {/* Course demo infomation */}
        <div className="mx-6 mt-6 p-3 border-2 border-br_gray rounded-md md:mx-16 md:mt-8 md:p-6 lg:border-none lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-5/6">
          {/* Course name */}
          <h3 className="text-body-md text-center font-medium lg:text-white lg:text-h1 lg:text-left ">
            {courseDetail.name}
          </h3>

          <div className="mt-3 lg:flex lg:items-start lg:gap-5 lg:mt-6">
            <div className="flex items-center justify-center gap-1 lg:flex-col lg:items-start lg:gap-3 lg:justify-start">
              {/* Star average rating */}
              <div className="flex">
                {fillStar(courseDetail.avgRating, 1)}
                {fillStar(courseDetail.avgRating, 2)}
                {fillStar(courseDetail.avgRating, 3)}
                {fillStar(courseDetail.avgRating, 4)}
                {fillStar(courseDetail.avgRating, 5)}
              </div>

              {/* Number of rating */}
              <p className="text-body-sm lg:text-white lg:text-body-md">({courseDetail.qntRating} đánh giá)</p>
            </div>

            {/* Tag component */}
            <div className="flex flex-col items-center mt-3">
              <Tag color="blue">Học mọi lúc mọi nơi với Examify</Tag>
            </div>
          </div>

          {/* Number of participants */}
          <div className="flex items-center mt-3 justify-center lg:justify-start lg:mt-6">
            <AiOutlineTeam className="text-[24px] mr-1 lg:text-white" />
            <p className="text-t_gray text-body-sm lg:text-body-md">
              <b className="text-black lg:text-white">{courseDetail.participants}</b> người tham gia
            </p>
          </div>

          {/* Point reward */}
          <p className="text-t_gray mt-3 text-body-sm text-center lg:text-left lg:text-body-md lg:mt-6">
            <b className="text-[#EF3737]">{courseDetail.pointComplete}</b> điểm khi hoàn thành
          </p>
        </div>
      </div>

      <div className="mx-6  md:mx-16 lg:flex lg:flex-row-reverse lg:gap-5 lg:mx-[100px]">
        {/* ModalRegisterCourse component */}
        <div className="lg:w-4/12 lg:relative">
          <div className="mt-10 min-h-[400px] md:w-1/2 md:mx-auto lg:w-full lg:sticky top-5">
            <ModalRegisterCourse course={courseDetail} />
          </div>
        </div>

        {/* Main content CourseDetail Page */}
        <div className="lg:w-8/12">
          <div className="mt-10 md:shadow-lg md:p-4 md:rounded-lg lg:p-8">
            {/* Achieve after course */}
            <h3 className="text-body-lg text-center font-medium lg:text-left">Bạn nhận được gì sau khóa học?</h3>
            <div className="grid gap-3 mt-4 md:grid-cols-2 lg:gap-4 lg:mt-8">
              {/* List achieve */}
              {courseDetail?.achieves?.map((achieve, index) => (
                <div key={achieve.id} className="flex items-center gap-4">
                  <div className="w-[30px] h-[30px] bg-primary flex flex-shrink-0 justify-center rounded-md items-center">
                    <span className="text-white">{index + 1}</span>
                  </div>
                  <p>{achieve.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course detail infomation */}
          <div className="mt-10 md:bg-bg_light_gray md:p-4 md:rounded-lg lg:p-8">
            <h3 className="text-body-lg text-center font-medium mb-4 lg:text-left lg:mb-8">Thông tin khóa học</h3>
            {/* Author info */}
            <div>
              <p className="font-medium">
                <i>Bài học được biên soạn và giảng dạy bởi nhóm tác giả:</i>
              </p>
              {/* List authors */}
              <ul className="list-disc pl-5 text-body-md font-normal mt-3">
                {courseDetail?.authors?.map((author) => (
                  <li key={author.id} className="mt-2">
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
                {courseDetail?.targetUsers?.map((target) => (
                  <TickItem key={target.id}>{target.content}</TickItem>
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
                {courseDetail?.skills?.map((skill) => (
                  <TickItem key={skill.id}>{skill.content}</TickItem>
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
                      'text-ac_blue': courseDetail.level === 'basic',
                      'text-ac_orange': courseDetail.level === 'general',
                      'text-ac_red': courseDetail.level === 'advance',
                    })}
                  >
                    {/* Check level */}
                    {courseDetail.level === 'basic' && 'cơ bản'}
                    {courseDetail.level === 'general' && 'phổ thông'}
                    {courseDetail.level === 'advance' && 'nâng cao'}
                  </b>
                </li>

                {/* List  other info  */}
                {courseDetail?.other?.map((info) => (
                  <li key={info.id} className="mt-2">
                    {info.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Couse Content */}
          <div className="mt-10 md:mt-20">
            <h3 className="text-body-lg text-center font-medium mb-4 md:mb-8 lg:text-left">Nội dung khóa học</h3>
            <div className="md:flex md:justify-between mb-2 md:mb-4">
              <p className="text-body-sm">
                <b>{courseDetail.totalChapter}</b> chương .{' '}
                <span className="hidden md:inline-block">
                  <b>{courseDetail.totalLesson}</b> bài học .{' '}
                </span>
                thời lượng{' '}
                <b>
                  {courseDetail.totalVideoTime.hour} giờ {courseDetail.totalVideoTime.minutes} phút
                </b>
              </p>

              {/* Button expand course content */}
              <span
                className="text-primary text-body-sm font-semibold cursor-pointer"
                onClick={() => setOpenAll(!openAll)}
              >
                {openAll ? 'Thu gọn' : 'Mở rộng tất cả'}
              </span>
            </div>

            {/* List chapter of the course */}
            <div className="grid gap-2">
              {chapters.map((chapter) => (
                <Chapter key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
