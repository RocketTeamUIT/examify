import React from 'react';
import { useState, useEffect } from 'react';
import { Input, Button, TextArea } from '../components/ui';
import { MdAlternateEmail } from 'react-icons/md';
import { userProfileScheme } from '../validations/userProfile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import isEmptyObject from '../utils/isEmptyObject';

function Profile() {
  const { user } = useSelector((store) => store.auth);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(userProfileScheme) });

  const values = watch();

  const handleDataForm = (data) => {
    console.log(data);
  };

  console.log(values);

  useEffect(() => {
    if (!isEmptyObject(user)) {
      setValue('email', user.email);
      setValue('firstName', user.firstName);
      setValue('lastName', user.lastName);
      setValue('phoneNumber', user.phoneNumber);
      setValue('dateOfBirth', user.dateOfBirth);
      setValue('description', user.description);
    }
  }, [user, setValue]);

  return (
    <div className="flex flex-col justify-between">
      <form className="flex flex-col md:px-5 lg:px-10 py-8" onSubmit={handleSubmit(handleDataForm)}>
        {/* Email */}
        <div>
          <Input
            disabled
            alternativeValue={values.email}
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
              alternativeValue={values.firstName}
              {...register('firstName')}
              fancyOutlined
              status={errors.firstname?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.firstname?.message}</p>
          </div>

          <div className="w-[40%] min-w-0">
            <Input
              label="Tên"
              alternativeValue={values.lastName}
              {...register('lastName')}
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
              alternativeValue={values.firstName}
              {...register('firstName')}
              fancyOutlined
              status={errors.firstname?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.firstname?.message}</p>
          </div>
          <div>
            <Input
              label="Tên"
              alternativeValue={values.lastName}
              {...register('lastName')}
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
              alternativeValue={values.dateOfBirth}
              {...register('dateOfBirth')}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.dateOfBirth?.message}</p>
          </div>

          <div className="w-1/2">
            <Input
              label="Số điện thoại"
              alternativeValue={values.phoneNumber}
              {...register('phoneNumber')}
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
              alternativeValue={values.dateOfBirth}
              {...register('dateOfBirth')}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.dateOfBirth?.message}</p>
          </div>

          <div>
            <Input
              label="Số điện thoại"
              alternativeValue={values.phoneNumber}
              {...register('phoneNumber')}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.phoneNumber?.message}</p>
          </div>
        </div>
        {/* Description */}
        <div className="mt-7"></div>
        <TextArea label="Mô tả" fancyOutlined alternativeValue={values.description} {...register('description')} />
        <span className="w-full border-t-[0.5px] border-br_gray my-10" />
        <Button width="fit-content">Cập nhật</Button>
      </form>
    </div>
  );
}

export default Profile;
