// import Component:
import Tag from '../../../../components/ui/Tag';
import SubNav from '../SubNav';
import AchieveList from './AchieveList';
import CourseContent from './CourseContent';
import ModalRegisterCourse from './ModalRegisterCourse';
import CourseInfo from './CourseInfo';
import QualityItem from './QualityItem';
import { RatingStar } from '../../../../components/ui';
// import Icon:
import { AiOutlineTeam } from 'react-icons/ai';
import { BiBookmarks, BiBookOpen } from 'react-icons/bi';
import { FaRegLightbulb } from 'react-icons/fa';
// import Image:
import bannerImg from '../../../../assets/images/courseDetailBanner.png';
// import Data:
import { courseDetail } from '../data';
// import hard data:
import { qualityUs } from '../../../../data/constants';

function CourseDetail() {
  return (
    <div className="mb-20">
      <div className="relative">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
        {/* SubNav component */}
        <SubNav />

        {/* Course demo infomation */}
        <div className="mx-6 mt-6 p-3 border-2 border-br_gray rounded-md md:mx-16 md:mt-8 md:p-6 lg:border-none lg:absolute lg:top-0 lg:w-7/12">
          {/* Course name */}
          <h3 className="text-body-md text-center font-medium lg:text-white lg:text-h1 lg:text-left ">
            {courseDetail.name}
          </h3>

          <div className="mt-3 lg:flex lg:items-start lg:gap-5 lg:mt-6">
            <div className="flex items-center justify-center gap-1 lg:flex-col lg:items-start lg:gap-3 lg:justify-start">
              {/* Star average rating */}
              <RatingStar avg={courseDetail.avgRating} />

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

      {/* Main content Page */}
      <div className="mx-6  md:mx-16 lg:flex lg:flex-row-reverse lg:gap-5 lg:mx-[100px]">
        <div className="lg:w-4/12 lg:relative">
          {/* ModalRegisterCourse component */}
          <div className="mt-10 min-h-[400px] md:w-1/2 md:mx-auto lg:w-full lg:sticky top-5 lg:mt-[-400px] xl:mt-[-500px]">
            <ModalRegisterCourse course={courseDetail} />
          </div>
        </div>

        {/* Content CourseDetail Page */}
        <div className="lg:w-8/12">
          {/* Achieve list component */}
          <div className="mt-10 md:shadow-lg md:p-4 md:rounded-lg lg:p-8">
            <AchieveList achieveList={courseDetail?.achieves} />
          </div>

          {/* Course infomation component */}
          <div className="mt-10 md:bg-bg_light_gray md:p-4 md:rounded-lg lg:p-8">
            <CourseInfo course={courseDetail} />
          </div>

          {/* Couse Content component*/}
          <div className="mt-10 md:mt-20">
            <CourseContent course={courseDetail} />
          </div>
        </div>
      </div>

      {/* Quality Us */}
      <div className="hidden md:block mt-20 mx-16">
        <h3 className="text-body-lg text-center font-medium mb-10">Chất lượng của chúng tôi</h3>
        {/* List quality about us */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {qualityUs[0] && <QualityItem icon={<FaRegLightbulb />}>{qualityUs[0]}</QualityItem>}
          {qualityUs[1] && <QualityItem icon={<AiOutlineTeam />}>{qualityUs[1]}</QualityItem>}
          {qualityUs[2] && <QualityItem icon={<BiBookOpen />}>{qualityUs[2]}</QualityItem>}
          {qualityUs[3] && <QualityItem icon={<BiBookmarks />}>{qualityUs[3]}</QualityItem>}
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
