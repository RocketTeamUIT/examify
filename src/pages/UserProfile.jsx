import { useState } from 'react';
import bannerImg from '../assets/banner1.jpg';
import { Input, Button } from '../components/ui';
import { MdAlternateEmail } from 'react-icons/md';

import { userProfileScheme } from '../validations/userProfile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function UserProfile() {
  const [email, setEmail] = useState('tudoi@gmail.com');
  const [stickyLabel, setStickyLabel] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userProfileScheme) });

  const { name: fnLabel, onChange: fnOnChange, onBlur: fnOnBlur, ref: fnRef } = register('firstname');
  const { name: lnLabel, onChange: lnOnChange, onBlur: lnOnBlur, ref: lnRef } = register('lastname');
  const { name: pnName, onChange: pnOnChange, onBlur: pnOnBlur, ref: pnRef } = register('phoneNumber');
  const { name: dobName, onChange: dobOnChange, onBlur: dobOnBlur, ref: dobRef } = register('dateOfBirth');

  const handleDataForm = (data) => {
    console.log(data);
  };

  const handleChange = (e) => {
    if (e.target.value && !stickyLabel) {
      setStickyLabel(true);
    }

    if (!e.target.value && stickyLabel) {
      setStickyLabel(false);
    }
  };

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
            <form className="flex flex-col md:px-5 lg:px-10 py-8" onSubmit={handleSubmit(handleDataForm)}>
              {/* Email */}
              <div>
                <Input
                  disabled
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  rightIcon={<MdAlternateEmail />}
                  fancyOutlined
                />
              </div>
              {/* Full name */}
              <div className="mt-8 hidden md:flex gap-5">
                <div className="w-[60%] min-w-0">
                  <Input
                    label="Họ và tên đệm"
                    ref={fnRef}
                    name={fnLabel}
                    onChange={fnOnChange}
                    onBlur={fnOnBlur}
                    fancyOutlined
                    status={errors.firstname?.message ? 'error' : ''}
                  />
                  <p className="text-ac_red text-sm mt-1">{errors.firstname?.message}</p>
                </div>

                <div className="w-[40%] min-w-0">
                  <Input
                    label="Tên"
                    ref={lnRef}
                    name={lnLabel}
                    onChange={lnOnChange}
                    onBlur={lnOnBlur}
                    fancyOutlined
                    status={errors.lastname?.message ? 'error' : ''}
                  />
                  <p className="text-ac_red text-sm mt-1">{errors.lastname?.message}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:hidden gap-y-8">
                <div>
                  <Input
                    label="Họ và tên đệm"
                    ref={fnRef}
                    name={fnLabel}
                    onChange={fnOnChange}
                    onBlur={fnOnBlur}
                    fancyOutlined
                    status={errors.firstname?.message ? 'error' : ''}
                  />
                  <p className="text-ac_red text-sm mt-1">{errors.firstname?.message}</p>
                </div>
                <div>
                  <Input
                    label="Tên"
                    ref={lnRef}
                    name={lnLabel}
                    onChange={lnOnChange}
                    onBlur={lnOnBlur}
                    fancyOutlined
                    status={errors.lastname?.message ? 'error' : ''}
                  />
                  <p className="text-ac_red text-sm mt-1">{errors.lastname?.message}</p>
                </div>
              </div>
              {/* Date of birth */}
              <div className="mt-8 hidden md:flex gap-5">
                <div className="w-1/2">
                  <Input
                    label="Ngày sinh"
                    type="date"
                    name={dobName}
                    onChange={dobOnChange}
                    onBlur={dobOnBlur}
                    ref={dobRef}
                    fancyOutlined
                  />
                  <p className="text-ac_red text-sm mt-1">{errors.dateOfBirth?.message}</p>
                </div>

                <div className="w-1/2">
                  <Input
                    label="Số điện thoại"
                    name={pnName}
                    onChange={pnOnChange}
                    onBlur={pnOnBlur}
                    ref={pnRef}
                    fancyOutlined
                  />
                  <p className="text-ac_red text-sm mt-1">{errors.phoneNumber?.message}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col md:hidden gap-y-8">
                <div>
                  <Input
                    label="Ngày sinh"
                    type="date"
                    name={dobName}
                    onChange={dobOnChange}
                    onBlur={dobOnBlur}
                    ref={dobRef}
                    fancyOutlined
                  />
                  <p className="text-ac_red text-sm mt-1">{errors.dateOfBirth?.message}</p>
                </div>

                <div>
                  <Input
                    label="Số điện thoại"
                    name={pnName}
                    onChange={pnOnChange}
                    onBlur={pnOnBlur}
                    ref={pnRef}
                    fancyOutlined
                  />
                  <p className="text-ac_red text-sm mt-1">{errors.phoneNumber?.message}</p>
                </div>
              </div>
              {/* Description */}
              <div className="flex items-center w-full relative mt-8 border rounded-lg border-br_light_gray focus-within:outline focus-within:outline-2 outline-ac_blue">
                <textarea
                  className="w-full px-4 pt-4 text-lg text-t_dark outline-none rounded-lg mb-1 mr-1"
                  onChange={handleChange}
                />

                {/* Label */}
                <label
                  className="absolute px-1 mx-3 peer-focus:top-0 peer-focus:text-sm top-1/2 -translate-y-1/2 transition-all"
                  style={{
                    backgroundColor: '#fff',
                    top: stickyLabel && '0',
                    fontSize: stickyLabel && '12px',
                  }}
                >
                  Mô tả
                </label>
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
