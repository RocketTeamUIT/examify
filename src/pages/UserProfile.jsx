import React from 'react';
import bannerImg from '../assets/banner1.jpg';
import { Input, Button } from '../components/ui';
import { BiUser, BiLockAlt } from 'react-icons/bi';
import SubNav from '../components/ui/SubNav';

function UserProfile() {
  return (
    <div className="h-screen mx-[100px]">
      {/* Banner */}
      <div className="relative h-[200px] overflow-hidden rounded-b-3xl">
        <img className="object-cover" src={bannerImg} alt="User banner" />
      </div>
      {/* Container */}
      <div className="relative h-[580px] -top-20 mx-[100px] flex flex-row gap-5">
        {/* Profile */}
        <div className="w-2/5 h-full bg-white overflow-hidden border border-br_gray rounded-3xl flex flex-col items-center py-12">
          {/* header */}
          <div className="flex flex-col items-center mb-9">
            <img className="w-20 h-20 object-cover rounded-full" src={bannerImg} alt="User avt" />
            <h1 className="my-3 text-h3 text-t_dark font-bold">KoraShi</h1>
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
        {/* Account setting */}
        <div className="w-3/5 h-full bg-white overflow-hidden border border-br_gray rounded-3xl flex flex-col">
          {/* SubNavigate */}
          <div className="h-[50px]">
            {/* Navigate item */}
            <div className="w-fit h-full ml-10 relative flex items-center">
              <h1 className="text-h6 text-primary font-semibold">Cài đặt tài khoản</h1>
              <span className="w-full border-t-[0.5px] border-primary absolute bottom-0" />
            </div>
            {/* light break */}
            <span className="w-full border-t-[0.5px] border-br_gray justify-self-end" />
          </div>
          {/* Form */}
          <div className="flex flex-col justify-between">
            <form className="flex flex-col px-10 py-8">
              {/* Email */}
              <div>
                <Input label="Email" value="abc@example.com" type="text" rightIcon={<BiUser />} fancyOutlined />
              </div>
              {/* Full name */}
              <div className="mt-8">
                <Input label="Họ và tên" value="KoraShi" fancyOutlined />
              </div>
              {/* Date of birth */}
              <div className="mt-8 flex flex-row gap-5">
                <Input label="Ngày sinh" type="date" placeholder="dd/MM/yyyy" fancyOutlined width="100%" />
                <Input label="Số điện thoại" fancyOutlined width="100%" />
              </div>
              {/* Description */}
              <div className="mt-8">
                <Input label="Mô tả" placeholder="Nhập mô tả" fancyOutlined height="100px" />
              </div>
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
