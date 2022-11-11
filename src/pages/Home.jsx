import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { coursesPro } from '../features/course/components/data';
import CourseListItem from '../features/course/components/CourseList/CourseListItem';

const Home = () => {
  return (
    <div className="bg-white flex justify-center">
      <div className="max-w-primary flex-1 px-6 md:px-8 lg:px-[100px] py-11 overflow-auto">
        {/* Carousel */}
        <div>
          <Swiper
            className="max-w-full"
            pagination={{
              clickable: true,
              renderBullet: (_, className) =>
                '<span class="' + className + '" style="width: 12px; height: 12px; margin-right: 8px;"></span>',
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img
                src={require('../assets/banner1.jpg')}
                className="aspect-[2] w-full object-cover rounded-lg"
                alt="Banner 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../assets/banner2.png')}
                className="aspect-[2] w-full object-cover rounded-lg"
                alt="Banner 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../assets/banner3.jpg')}
                className="aspect-[2] w-full object-cover rounded-lg"
                alt="Banner 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../assets/banner4.png')}
                className="aspect-[2] w-full object-cover rounded-lg"
                alt="Banner 1"
              />
            </SwiperSlide>

            <div className="h-11"></div>
          </Swiper>
        </div>

        {/* Popular courses */}
        <div className="mt-20">
          {coursesPro?.length > 0 && <CourseListItem listName="Khóa học nổi bật" listCourse={coursesPro} />}
        </div>

        {/* Latest exams */}
        <div className="mt-20">
          {coursesPro?.length > 0 && <CourseListItem listName="Đề thi mới nhất" listCourse={coursesPro} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
