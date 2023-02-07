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
import { getLatestExamsService } from 'features/exam/services/exam';
import ExamItem from 'features/exam/ExamList/ExamItem';

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

const useFetchLatestExams = () => {
  const [data, setData] = useState([]);
  const axiosWithToken = useAxiosWithToken();

  useEffect(() => {
    const fetchPopularCourse = async () => {
      try {
        const response = await getLatestExamsService(axiosWithToken);
        setData(response.data.data);
      } catch (error) {
        console.log('🚀 ~ file: Home.jsx:22 ~ useEffect ~ error', error);
      }
    };

    fetchPopularCourse();
  }, [axiosWithToken]);

  return { data };
};

const Home = () => {
  const { courses } = useFetchPopularCourse();
  const { data: exams } = useFetchLatestExams();

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
        {exams?.length > 0 && (
          <>
            <div className="flex items-end mt-10">
              <h3 className="text-body-lg font-semibold mr-3">Đề thi mới nhất</h3>
            </div>
            {/* List Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
              {exams.length > 0 && exams.slice(0, 4).map((exam) => <ExamItem list={false} exam={exam} key={exam.id} />)}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Home;
