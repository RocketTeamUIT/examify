import React from 'react';
import { useState, useEffect } from 'react';
import { Input, Button } from '../components/ui';
import { MdAlternateEmail } from 'react-icons/md';
import { userProfileScheme } from '../validations/userProfile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';

function Profile() {
  const { user } = useSelector((store) => store.auth);
  const [stickyLabel, setStickyLabel] = useState(false);
  // const [email, setEmail] = useState(user.email);
  // const [firstName, setfirstName] = useState(user.firstName);
  // const [lastName, setlastName] = useState(user.lastName);
  // const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  // const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  // const [description, setDescription] = useState(user.description);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(userProfileScheme) });

  const value = watch();

  useEffect(() => {
    if (user) {
      setValue('email', user.email);
      setValue('firstName', user.firstName);
      setValue('lastName', user.lastName);
      setValue('dateOfBirth', user.dateOfBirth);
      setValue('phoneNumber', user.phoneNumber);
      setValue('description', user.description);
      // setEmail(user.email);
      // setfirstName(user.firstName);
      // setlastName(user.lastName);
      // setDateOfBirth(user.dateOfBirth);
      // setPhoneNumber(user.phoneNumber);
      // setDescription(user.description);
    }
  }, [user]);

  const handleDataForm = (data) => {
    //console.log(data);
    // const { email, password } = data;
    console.log('Update successfully');
  };

  const handleChange = (e) => {
    if (e.target.value && !stickyLabel) {
      setStickyLabel(true);
    }

    if (!e.target.value && stickyLabel) {
      setStickyLabel(false);
    }

    setValue('description', e.target.value);
  };

  return (
    <div className="flex flex-col justify-between">
      <form className="flex flex-col md:px-5 lg:px-10 py-8" onSubmit={handleSubmit(handleDataForm)}>
        {/* Email */}
        <div>
          <Input
            disabled
            alternativeValue={value.email}
            {...register('email')}
            rightIcon={<MdAlternateEmail fill="#A9A7AC" />}
            fancyOutlined
            fancyBackgroundColor="transparent"
          />
        </div>
        {/* Full name */}
        <div className="mt-8 hidden md:flex gap-5">
          <div className="w-[60%] min-w-0">
            <Input
              label="Họ và tên đệm"
              alternativeValue={value.firstName}
              {...register('firstName')}
              onChange={(e) => setValue('firstName', e.target.value)}
              fancyOutlined
              status={errors.firstName?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.firstName?.message}</p>
          </div>

          <div className="w-[40%] min-w-0">
            <Input
              label="Tên"
              alternativeValue={value.lastName}
              {...register('lastName')}
              onChange={(e) => setValue('lastName', e.target.value)}
              fancyOutlined
              status={errors.lastName?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.lastName?.message}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:hidden gap-y-8">
          <div>
            <Input
              label="Họ và tên đệm"
              alternativeValue={value.firstName}
              {...register('firstName')}
              onChange={(e) => setValue('firstName', e.target.value)}
              fancyOutlined
              status={errors.firstName?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.firstName?.message}</p>
          </div>
          <div>
            <Input
              label="Tên"
              alternativeValue={value.lastName}
              {...register('lastName')}
              onChange={(e) => setValue('lastName', e.target.value)}
              fancyOutlined
              status={errors.lastName?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.lastName?.message}</p>
          </div>
        </div>
        {/* Date of birth */}
        <div className="mt-8 hidden md:flex gap-5">
          <div className="w-1/2">
            <Input
              label="Ngày sinh"
              type="date"
              alternativeValue={value.dateOfBirth}
              {...register('dateOfBirth')}
              onChange={(e) => setValue('dateOfBirth', e.target.value)}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.dateOfBirth?.message}</p>
          </div>

          <div className="w-1/2">
            <Input
              label="Số điện thoại"
              {...register('phoneNumber')}
              onChange={(e) => setValue('phoneNumber', e.target.value)}
              alternativeValue={value.phoneNumber}
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
              alternativeValue={value.dateOfBirth}
              {...register('dateOfBirth')}
              onChange={(e) => setValue('dateOfBirth', e.target.value)}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.dateOfBirth?.message}</p>
          </div>

          <div>
            <Input
              label="Số điện thoại"
              {...register('phoneNumber')}
              onChange={(e) => setValue('phoneNumber', e.target.value)}
              alternativeValue={value.phoneNumber}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.phoneNumber?.message}</p>
          </div>
        </div>
        {/* Description */}
        <div className="flex items-center w-full text-md relative mt-8 border rounded-lg border-br_light_gray focus-within:outline focus-within:outline-2 outline-ac_blue">
          <textarea
            className="w-full px-4 pt-4 text-t_dark outline-none rounded-lg mb-1 mr-1 peer"
            onChange={handleChange}
            alternativeValue={value.description}
            {...register('description')}
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
  );
}

export default Profile;
