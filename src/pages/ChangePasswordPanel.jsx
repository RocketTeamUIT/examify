import React from 'react';
import { Input, Button } from '../components/ui';
import { changePasswordScheme } from '../validations/changePassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function ChangePasswordPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(changePasswordScheme) });

  const {
    name: passwordLabel,
    onChange: passwordOnChange,
    onBlur: passwordOnBlur,
    ref: passwordRef,
  } = register('password');
  const {
    name: confirmPasswordLabel,
    onChange: confirmPasswordOnChange,
    onBlur: confirmPasswordOnBlur,
    ref: confirmPasswordRef,
  } = register('confirmPassword');

  const handleDataForm = (data) => {
    console.log(data);

    // Call API at here
  };

  return (
    <div className="flex flex-col justify-between">
      <form className="flex flex-col md:px-5 lg:px-10 py-8" onSubmit={handleSubmit(handleDataForm)}>
        <div className="mt-2">
          <Input
            label="Mật khẩu"
            type="password"
            ref={passwordRef}
            name={passwordLabel}
            onChange={passwordOnChange}
            onBlur={passwordOnBlur}
            fancyOutlined
            visibilityToggle
            status={errors.password?.message ? 'error' : ''}
          />
          <p className="text-ac_red text-sm mt-1">{errors.password?.message}</p>
        </div>

        <div className="mt-11">
          <Input
            label="Xác nhận mật khẩu"
            type="password"
            ref={confirmPasswordRef}
            name={confirmPasswordLabel}
            onChange={confirmPasswordOnChange}
            onBlur={confirmPasswordOnBlur}
            fancyOutlined
            visibilityToggle
            status={errors.confirmPassword?.message ? 'error' : ''}
          />
          <p className="text-ac_red text-sm mt-1">{errors.confirmPassword?.message}</p>
        </div>

        <div className="mt-16">
          <Button width="100%">Đặt lại mật khẩu</Button>
        </div>
      </form>
    </div>
  );
}

export default ChangePasswordPanel;
