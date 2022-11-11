import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Button } from '../components/ui';

const Home = () => {
  return (
    <div className="bg-white flex justify-center">
      <div className="max-w-primary flex-1 px-3 md:px-8 lg:px-[100px] pt-11">
        {/* Carousel */}
        <div>
          <Swiper
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
                className="h-[500px] w-full object-cover rounded-lg"
                alt="Banner 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../assets/banner2.png')}
                className="h-[500px] w-full object-cover rounded-lg"
                alt="Banner 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../assets/banner3.jpg')}
                className="h-[500px] w-full object-cover rounded-lg"
                alt="Banner 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../assets/banner4.png')}
                className="h-[500px] w-full object-cover rounded-lg"
                alt="Banner 1"
              />
            </SwiperSlide>

            <div className="h-11"></div>
          </Swiper>
        </div>

        {/* Popular courses */}
        <div className="mt-20">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-h3">Khoá học nổi bật</h3>
            <button className="h-8 px-3 text-primary flex items-center text-md">
              Xem tất cả
              <MdOutlineKeyboardArrowRight className="w-6 h-6 mt-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="bg-black w-full h-10"></div>
            <div className="bg-orange-500 w-full h-10"></div>
            <div className="bg-blue-500 w-full h-10"></div>
          </div>
        </div>

        {/* Latest exams */}
        <div className="mt-20">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-h3">Đề thi mới nhất</h3>
            <button className="h-8 px-3 text-primary flex items-center text-md">
              Xem tất cả
              <MdOutlineKeyboardArrowRight className="w-6 h-6 mt-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-3 mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
