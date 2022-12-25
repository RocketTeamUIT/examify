import React from 'react';
import { useState, useEffect } from 'react';
import { Input, Button, TextArea } from '../components/ui';
import { MdAlternateEmail } from 'react-icons/md';
import { userProfileScheme } from '../validations/userProfile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../features/auth/authSlice';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import moment from 'moment';

function Profile() {
  const { user } = useSelector((store) => store.auth);
  const [stickyLabel, setStickyLabel] = useState(false);
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

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
      setValue('dateOfBirth', moment(user.dateOfBirth).format('YYYY-MM-DD'));
      setValue('phoneNumber', user.phoneNumber ? user.phoneNumber : '');
      setValue('description', user.description);
    }
  }, [user]);

  const handleDataForm = (data) => {
    dispatch(
      updateUserInfo({
        axiosPrivate,
        firstName: value.firstName,
        lastName: value.lastName,
        dateOfBirth: value.dateOfBirth,
        phoneNumber: value.phoneNumber,
        description: value.description,
      }),
    );
    toast.success('Cập nhật thành công!');
  };

  const handleChange = (e) => {
    if (e.target.value && !stickyLabel) {
      setStickyLabel(true);
    }

    if (!e.target.value && stickyLabel) {
      setStickyLabel(false);
    }

    setValue('description', e.target.value);
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-between">
      <form className="flex flex-col md:px-5 lg:px-10 py-8" onSubmit={handleSubmit(handleDataForm)}>
        {/* Email */}
        <div>
          <Input
            label="Email"
            disabled
            alternativeValue={value.email}
            {...register('email')}
            rightIcon={<MdAlternateEmail fill="#A9A7AC" />}
            fancyOutlined
            fancyBackgroundColor="transparent"
          />
        </div>

        {/* Full name */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-5">
          <div className="md:w-[60%] min-w-0">
            <Input
              label="Họ và tên đệm"
              alternativeValue={value.firstName}
              fancyOutlined
              status={errors.firstName?.message ? 'error' : ''}
              {...register('firstName')}
            />
            <p data-testid="firstname-error" className="text-ac_red text-sm mt-1">
              {errors.firstName?.message}
            </p>
          </div>

          <div className="md:w-[40%] min-w-0">
            <Input
              label="Tên"
              alternativeValue={value.lastName}
              fancyOutlined
              status={errors.lastName?.message ? 'error' : ''}
              {...register('lastName')}
            />
            <p data-testid="lastname-error" className="text-ac_red text-sm mt-1">
              {errors.lastName?.message}
            </p>
          </div>
        </div>

        {/* Date of birth and Phone Number*/}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-5">
          <div className="md:w-1/2">
            <Input
              label="Ngày sinh"
              type="date"
              alternativeValue={moment(value.dateOfBirth).format('YYYY-MM-DD')}
              fancyOutlined
              {...register('dateOfBirth')}
            />
            <p data-testid="birthdate-error" className="text-ac_red text-sm mt-1">
              {errors.dateOfBirth?.message}
            </p>
          </div>

          <div className="md:w-1/2">
            <Input
              label="Số điện thoại"
              alternativeValue={value.phoneNumber}
              fancyOutlined
              {...register('phoneNumber')}
            />
            <p data-testid="phone-error" className="text-ac_red text-sm mt-1">
              {errors.phoneNumber?.message}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <TextArea
            {...register('description')}
            label="Mô tả"
            width="100%"
            rounded={[8, 8, 8, 8]}
            onChange={handleChange}
            alternativeValue={value.description}
            fancyOutlined
          />
        </div>
        <span className="w-full border-t-[0.5px] border-br_gray my-10" />
        <Button testid="update-info-btn" width="fit-content">
          Cập nhật
        </Button>
      </form>
    </div>
  );
}

export default Profile;
