import React from 'react';
import bannerImg from '../assets/banner1.jpg';
import { Input, Button } from '../components/ui';
import { BiUser } from 'react-icons/bi';

function UserProfile() {
  return (
    <div className="h-fit lg:mx-[50px] xl:mx-[100px] xxl:mx-[150px]">
      {/* Banner */}
      <div className="h-[200px] overflow-hidden lg:rounded-b-3xl">
        <img className="object-cover" src={bannerImg} alt="User banner" />
      </div>
      {/* Container */}
      <div className="relative h-fit md:h-[580px] -top-16 md:-top-20 md:mx-[20px] lg:mx-[50px] xl:mx-[100px] xxl:mx-[150px] flex flex-col md:flex-row md:gap-5 px-1 sm:px-10 md:px-0">
        {/* Profile 1*/}
        <div className="w-2/5 h-full bg-white overflow-hidden border border-br_gray rounded-3xl hidden md:flex flex-col items-center py-12">
          {/* header */}
          <div className="flex flex-col items-center mb-9">
            <img className="w-20 h-20 object-cover rounded-full" src={bannerImg} alt="User avt" />
            <h1 className="my-3 text-h3 text-t_dark font-bold">Phan Thanh Tú</h1>
            <p className="text-h6 text-t_light_gray_2 font-medium">Độ kiếp</p>
          </div>
          {/* body */}
          <div className="flex flex-col items-center w-full">
            <span className="w-full border-t-[0.5px] border-br_gray" />
            {/* Num of enrolled course */}
            <div className="flex w-full justify-between px-10 py-5">
              <h1 className="text-h5 font-medium text-t_dark">Số khóa học đã đăng ký</h1>
              <h1 className="text-h5 font-medium text-ac_orange">15</h1>
            </div>
            {/* Num of your flashcard */}
            <span className="w-full border-t-[0.5px] border-br_gray" />
            <div className="flex w-full justify-between px-10 py-5">
              <h1 className="text-h5 font-medium text-t_dark">Số flashcard của bạn</h1>
              <h1 className="text-h5 font-medium text-ac_green">15</h1>
            </div>
            {/* Accumulated point */}
            <span className="w-full border-t-[0.5px] border-br_gray" />
            <div className="flex flex-col w-full items-center px-10 py-5">
              <h1 className="text-h5 font-medium text-t_dark">Điểm tích lũy</h1>
              <h1 className="text-h2 font-bold text-t_light_gray_2 mt-4">32156</h1>
            </div>
          </div>
        </div>
        {/* Profile 2*/}
        <div className="md:hidden">
          {/* Avt and info */}
          <div className="flex">
            <img className="w-32 h-32 object-cover rounded-full border-8 border-white" src={bannerImg} alt="User avt" />
            {/* Info */}
            <div>
              <div className="h-1/2" />
              <div className="h-1/2 flex flex-col pb-2 justify-around">
                <h1 className="mt-1 text-h4 text-t_dark font-bold">Phan Thanh Tú</h1>
                <p className="text-h6 text-t_light_gray_2 font-medium">Độ kiếp</p>
              </div>
            </div>
          </div>
          {/* body */}
          <div className="flex flex-col items-center w-full my-7 px-5 md:hidden">
            {/* Num of enrolled course */}
            <div className="flex w-full justify-between py-1">
              <h1 className="text-sm font-medium text-t_dark">Số khóa học đã đăng ký</h1>
              <h1 className="text-sm font-medium text-ac_orange">15</h1>
            </div>
            {/* Num of your flashcard */}
            <div className="flex w-full justify-between py-1">
              <h1 className="text-sm font-medium text-t_dark">Số flashcard của bạn</h1>
              <h1 className="text-sm font-medium text-ac_green">15</h1>
            </div>
            {/* Accumulated point */}
            <div className="flex w-full justify-between py-1">
              <h1 className="text-sm font-medium text-t_dark">Điểm tích lũy</h1>
              <h1 className="text-sm font-bold text-t_light_gray_2">32156</h1>
            </div>
          </div>
        </div>
        {/* Account setting */}
        <div className="md:w-3/5 h-full bg-white overflow-hidden md:border md:border-br_gray md:rounded-3xl justify-self-center px-5 md:px-0">
          {/* SubNavigate */}
          <div className="hidden md:block h-[50px] relative">
            {/* Navigate item */}
            <div className="w-fit h-full md:ml-5 lg:ml-10 relative flex items-center">
              <h1 className="text-h6 text-primary font-semibold">Cài đặt tài khoản</h1>
              <span className="w-full border-t-[0.5px] border-primary absolute bottom-0" />
            </div>
            {/* line break */}
            <span className="w-full border-t-[0.5px] border-br_gray absolute bottom-0" />
          </div>
          {/* Form */}
          <div className="flex flex-col justify-between">
            <form className="flex flex-col md:px-5 lg:px-10 py-8">
              {/* Email */}
              <div>
                <Input label="Email" value="abc@example.com" type="text" rightIcon={<BiUser />} fancyOutlined />
              </div>
              {/* Full name */}
              <div className="mt-8 hidden md:flex gap-5">
                <div className="w-[60%] min-w-0">
                  <Input label="Họ và tên đệm" value="Phan" fancyOutlined />
                </div>
                <div className="w-[40%] min-w-0">
                  <Input label="Tên" value="Tú" fancyOutlined />
                </div>
              </div>
              <div className="mt-8 flex flex-col md:hidden gap-y-8">
                <Input label="Họ và tên đệm" value="Phan" fancyOutlined />
                <Input label="Tên" value="Tú" fancyOutlined />
              </div>
              {/* Date of birth */}
              <div className="mt-8 hidden md:flex gap-5">
                <Input label="Ngày sinh" type="date" fancyOutlined width="50%" />
                <Input label="Số điện thoại" fancyOutlined width="50%" />
              </div>
              <div className="mt-8 flex flex-col md:hidden gap-y-8">
                <Input label="Ngày sinh" type="date" fancyOutlined />
                <Input label="Số điện thoại" fancyOutlined />
              </div>
              {/* Description */}
              <label className="mt-8">
                <textarea
                  placeholder="Nhập mô tả"
                  className="w-full border border-br_light_gray rounded-md px-4 pt-4 text-lg text-t_dark"
                />
              </label>
              <span className="w-full border-t-[0.5px] border-br_gray my-10" />
              <Button width="fit-content">Cập nhật</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
