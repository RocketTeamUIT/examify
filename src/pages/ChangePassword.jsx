import React from 'react';
import authImg from '../assets/auth-page-img.png';
import logo from '../assets/circle_logo.png';
import { Link } from 'react-router-dom';
import { BiLockAlt } from 'react-icons/bi';
import { Input, Button } from '../components/ui';

const ChangePassword = () => {
  return (
    //layout
    <div className="mx-6 h-screen sm:px-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 items-center overflow-auto">
      {/* Modal */}
      <div className="min-w-[280px] h-[680px] flex my-6 col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 rounded-3xl md:border border-br_gray overflow-hidden items-center">
        {/* image */}
        <img src={authImg} alt="Auth" className="w-1/2 h-full object-cover hidden md:block" />
        {/* content */}
        <div className="h-fit w-full md:w-1/2 py-4 px-1 md:px-5 lg:px-10 flex flex-col justify-between">
          {/* header */}
          <div className="flex flex-col items-center">
            <div className="w-20">
              <Link to="/">
                <img src={logo} alt="Examify logo" />
              </Link>
            </div>
            <div className="text-center mb-10">
              <h1 className="text-h3 font-bold text-primary mt-2">Đặt lại mật khẩu</h1>
              <p className="text-sm text-t_gray">Hãy nhập mật khẩu mới của bạn</p>
            </div>
          </div>

          {/* body */}
          <form className="mt-3">
            <label className="text-h6 font-medium text-t_dark block mt-2">
              Mật khẩu*
              <Input rightIcon={<BiLockAlt />} />
            </label>

            <label className="text-h6 font-medium text-t_dark  block mt-2">
              Xác nhận mật khẩu*
              <Input rightIcon={<BiLockAlt />} />
            </label>

            <div className="mt-16">
              <Button width="100%">
                <Link to="/signin">Đặt lại mật khẩu</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
