import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { coursesPro } from '../features/course/data';
import CourseListItem from '../features/course/CourseList/CourseListItem';
import Container from '../layouts/components/Container';
import useFetchCourse from '../hooks/useFetchCourse';

const Home = () => {
  const { advanceCourses } = useFetchCourse();

  return (
    <Container className="py-11">
      {/* Carousel */}
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
            className="aspect-[5/2] w-full object-cover rounded-lg"
            alt="Banner 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require('../assets/banner2.png')}
            className="aspect-[5/2] w-full object-cover rounded-lg"
            alt="Banner 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require('../assets/banner3.jpg')}
            className="aspect-[5/2] w-full object-cover rounded-lg"
            alt="Banner 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require('../assets/banner4.png')}
            className="aspect-[5/2] w-full object-cover rounded-lg"
            alt="Banner 1"
          />
        </SwiperSlide>
        <div className="h-11"></div>
      </Swiper>

      {/* Popular courses */}
      <div className="mt-20">
        {coursesPro?.length > 0 && (
          <CourseListItem listName="Khóa học nổi bật" listCourse={advanceCourses.slice(0, 4)} />
        )}
      </div>

      {/* Latest exams */}
      <div className="mt-20">
        {coursesPro?.length > 0 && <CourseListItem listName="Đề thi mới nhất" listCourse={coursesPro} />}
      </div>
    </Container>
  );
};

export default Home;
