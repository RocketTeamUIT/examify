import React from 'react';
import { Input, Button } from '../components/ui';
import { changePasswordScheme } from '../validations/changePassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePassword } from '../features/auth/authSlice';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function ChangePasswordPanel() {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(changePasswordScheme) });

  const value = watch();

  const handleDataForm = (data) => {
    // Call API at here
    dispatch(
      changePassword({
        axiosPrivate,
        oldPassword: value.oldPassword,
        newPassword: value.password,
      }),
    );
    toast.success('Đổi mật khẩu thành công!');
  };

  return (
    <div className="flex flex-col justify-between">
      <form className="flex flex-col md:px-5 lg:px-10 py-8" onSubmit={handleSubmit(handleDataForm)}>
        <div className="mt-11">
          <Input
            label="Mật khẩu cũ"
            type="password"
            {...register('oldPassword')}
            alternativeValue={value.oldPassword}
            onChange={(e) => setValue('oldPassword', e.target.value)}
            fancyOutlined
            visibilityToggle
            status={errors.oldPassword?.message ? 'error' : ''}
          />
          <p className="text-ac_red text-sm mt-1">{errors.oldPassword?.message}</p>
        </div>

        <div className="mt-11">
          <Input
            label="Mật khẩu mới"
            type="password"
            {...register('password')}
            alternativeValue={value.password}
            onChange={(e) => setValue('password', e.target.value)}
            fancyOutlined
            visibilityToggle
            status={errors.password?.message ? 'error' : ''}
          />
          <p data-testid="new-password-error" className="text-ac_red text-sm mt-1">
            {errors.password?.message}
          </p>
        </div>

        <div className="mt-11">
          <Input
            label="Xác nhận mật khẩu"
            type="password"
            {...register('confirmPassword')}
            alternativeValue={value.confirmPassword}
            onChange={(e) => setValue('confirmPassword', e.target.value)}
            fancyOutlined
            visibilityToggle
            status={errors.confirmPassword?.message ? 'error' : ''}
          />
          <p data-testid="retype-password-error" className="text-ac_red text-sm mt-1">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div className="mt-16">
          <Button width="100%">Đặt lại mật khẩu</Button>
        </div>
      </form>
    </div>
  );
}

export default ChangePasswordPanel;
