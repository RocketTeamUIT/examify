// Component:
import Tag from '../../../../components/ui/Tag';
// Icon:
import { AiFillStar, AiOutlineTeam } from 'react-icons/ai';
// Image:
import bannerImg from '../../../../assets/images/courseDetailBanner.png';
// Data:
import { course } from '../data';

function CourseDetail() {
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
        {/* <SubNav /> */}

        {/* Course demo infomation */}
        <div className="mx-3 mt-3 py-3 border-2 border-br_gray rounded-md md:mx-16 md:mt-8 md:p-6 lg:border-none lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-5/6">
          {/* Course name */}
          <h3 className="text-body-md text-center font-medium lg:text-white lg:text-h1 lg:text-left ">{course.name}</h3>
          <div className="mt-3 lg:flex lg:items-start lg:gap-5 lg:mt-6">
            <div className="flex items-center justify-center gap-1 lg:flex-col lg:items-start lg:gap-3 lg:justify-start">
              {/* Star average rating */}
              <div className="flex">
                {fillStar(course.avgRating, 1)}
                {fillStar(course.avgRating, 2)}
                {fillStar(course.avgRating, 3)}
                {fillStar(course.avgRating, 4)}
                {fillStar(course.avgRating, 5)}
              </div>
              {/* Number of rating */}
              <p className="text-body-sm lg:text-white lg:text-body-md">({course.qntRating} đánh giá)</p>
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
              <b className="text-black lg:text-white">{course.participants}</b> người tham gia
            </p>
          </div>

          {/* Point reward */}
          <p className="text-t_gray mt-3 text-body-sm text-center lg:text-left lg:text-body-md lg:mt-6">
            <b className="text-[#EF3737]">{course.pointComplete}</b> điểm khi hoàn thành
          </p>
        </div>
      </div>

      {/* Main content CourseDetail Page */}
    </div>
  );
}

export default CourseDetail;
