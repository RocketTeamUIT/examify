import React from 'react';
import bannerImg from '../assets/banner1.jpg';
// import { useState } from 'react';
import {  MuiTabs } from '../components/ui';
import Profile from './Profile';
import ChangePassword from './ChangePasswordPanel';

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
        <div className="md:w-3/5 h-full bg-white overflow-hidden border md:border-br_gray md:rounded-3xl justify-self-center mx-5 md:mx-0">
          <MuiTabs componentList={[
              {
                label: 'Cài đặt tài khoản',
                data: <Profile/>
              },
              {
                label: 'Đổi mật khẩu',
                data: <ChangePassword/>
              }
            ]}/>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
