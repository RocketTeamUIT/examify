import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { coursesPro } from '../features/course/data';
import CourseListItem from '../features/course/CourseList/CourseListItem';
import Container from '../layouts/components/Container';
import useAxiosWithToken from '../hooks/useAxiosWithToken';
import { getPopularCourseService } from '../features/course/services/course';

const useFetchPopularCourse = () => {
  const [courses, setCourses] = useState([]);
  const axiosWithToken = useAxiosWithToken();

  useEffect(() => {
    const fetchPopularCourse = async () => {
      try {
        const response = await getPopularCourseService(axiosWithToken);
        setCourses(response.data.data);
      } catch (error) {
        console.log('🚀 ~ file: Home.jsx:22 ~ useEffect ~ error', error);
      }
    };

    fetchPopularCourse();
  }, [axiosWithToken]);

  return { courses };
};

const Home = () => {
  const { courses } = useFetchPopularCourse();

  if (!courses) return null;

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
        {coursesPro?.length > 0 && <CourseListItem listName="Khóa học nổi bật" listCourse={courses} />}
      </div>

      {/* Latest exams */}
      <div className="mt-20">
        {coursesPro?.length > 0 && <CourseListItem listName="Đề thi mới nhất" listCourse={coursesPro} />}
      </div>
    </Container>
  );
};

export default Home;
