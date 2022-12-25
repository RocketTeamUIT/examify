// import Component:
import Tag from '../../../components/ui/Tag';
import SubNav from '../../../components/ui/SubNav';
import AchieveList from './AchieveList';
import CourseContent from './CourseContent';
import ModalRegisterCourse from './ModalRegisterCourse';
import QualityItem from './QualityItem';
import { RatingStar } from '../../../components/ui';
import { CommentList } from '../../comments';
// import Icon:
import { AiOutlineTeam } from 'react-icons/ai';
import { BiBookmarks, BiBookOpen } from 'react-icons/bi';
import { FaRegLightbulb } from 'react-icons/fa';
// import Image:
import bannerImg from '../../../assets/images/courseDetailBanner.png';
// import Data:
// import hard data:
import { qualityUs } from '../../../data/constants';
import Container from '../../../layouts/components/Container';
import { useParams } from 'react-router-dom';
import useComments from './hooks/useComments';
import { useSelector } from 'react-redux';
import isEmptyObject from '../../../utils/isEmptyObject';
import useFetchCourse from '../../../hooks/useFetchCourse';

function CourseDetail() {
  const { courseId } = useParams();
  const {
    comments,
    totalRootComments,
    totalComments,
    type,
    setType,
    loading,
    selectedPage,
    setSelectedPage,
    getComments,
  } = useComments(courseId);
  useFetchCourse();
  const { courseDetail } = useSelector((store) => store.course);

  if (isEmptyObject(courseDetail)) return null;

  return (
    <div className="mb-20">
      <div className="relative">
        <img className="w-full object-cover md:min-h-[500px]" src={bannerImg} alt="examify" />

        {/* Course demo information */}
        <Container>
          <div className="my-6 md:my-4 py-16 border-2 border-br_gray rounded-md lg:border-none lg:absolute lg:top-0 lg:w-1/2">
            {/* Course name */}
            <h3 className="text-body-md text-center font-medium lg:text-white lg:text-h1 lg:text-left">
              {courseDetail.name}
            </h3>

            <div className="mt-3 lg:flex lg:items-start lg:gap-5 lg:mt-6">
              <div className="flex items-center justify-center gap-1 lg:flex-col lg:items-start lg:gap-3 lg:justify-start">
                {/* Star average rating */}
                <RatingStar avg={courseDetail.avgRating} />

                {/* Number of rating */}
                <p className="text-body-sm lg:text-white lg:text-body-md">({courseDetail.quantityRating} đánh giá)</p>
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
              <b className="text-[#EF3737]">{courseDetail.pointReward}</b> điểm khi hoàn thành
            </p>
          </div>
        </Container>
      </div>

      {/* SubNav component */}
      <div className="sticky top-[60px] z-10">
        <SubNav
          scroll
          navList={[
            {
              name: 'Mục tiêu',
              path: '#course-achieve',
            },
            {
              name: 'Thông tin',
              path: '#course-info',
            },
            {
              name: 'Nội dung',
              path: '#course-content',
            },
            {
              name: 'Bình luận',
              path: '#course-comment',
            },
          ]}
        />
      </div>

      {/* Main content Page */}
      <Container overflowVisible>
        <div className="lg:flex lg:flex-row-reverse lg:gap-5">
          <div className="lg:w-4/12 lg:relative">
            {/* ModalRegisterCourse component */}
            <div className="mt-10 min-h-[400px] md:w-1/2 md:mx-auto lg:w-full z-10 lg:sticky top-[72px] lg:mt-[-400px] xl:mt-[-500px]">
              <ModalRegisterCourse course={courseDetail} />
            </div>
          </div>

          {/* Content CourseDetail Page */}
          <div className="lg:w-8/12">
            {/* Achieve list component */}
            <div className="mt-10 md:shadow-lg md:p-4 md:rounded-lg lg:p-8" id="course-achieve">
              <AchieveList achieve={courseDetail?.achieves} />
            </div>

            {/* Course information component */}
            <div className="mt-10 md:bg-bg_light_gray md:p-4 md:rounded-lg lg:p-8" id="course-info">
              <h3 className="text-body-lg text-center font-medium lg:text-left mb-8">Thông tin khoá học</h3>
              <p dangerouslySetInnerHTML={{ __html: courseDetail.description }}></p>
            </div>

            {/* Couse Content component*/}
            <div className="mt-10 md:mt-20" id="course-content">
              <CourseContent course={courseDetail} />
            </div>
          </div>
        </div>
      </Container>

      {/* Quality Us */}
      <Container className="mt-20 md:flex hidden">
        <h3 className="text-body-lg text-center font-medium mb-10">Chất lượng của chúng tôi</h3>
        {/* List quality about us */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {qualityUs[0] && <QualityItem icon={<FaRegLightbulb />}>{qualityUs[0]}</QualityItem>}
          {qualityUs[1] && <QualityItem icon={<AiOutlineTeam />}>{qualityUs[1]}</QualityItem>}
          {qualityUs[2] && <QualityItem icon={<BiBookOpen />}>{qualityUs[2]}</QualityItem>}
          {qualityUs[3] && <QualityItem icon={<BiBookmarks />}>{qualityUs[3]}</QualityItem>}
        </div>
      </Container>

      <Container className="mt-[100px]" overflowVisible id="course-comment">
        <CommentList
          setType={setType}
          totalComments={totalComments}
          totalRootComments={totalRootComments}
          selected={selectedPage}
          setSelected={setSelectedPage}
          reloadComments={() => getComments(courseId, type, selectedPage)}
          comments={comments}
          loading={loading}
        />
      </Container>
    </div>
  );
}

export default CourseDetail;
