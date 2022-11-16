import logo from '../assets/circle_logo.png';
import { Link } from 'react-router-dom';
import { BiUser, BiLockAlt } from 'react-icons/bi';
import { Input, Button } from '../components/ui';

import { signupScheme } from '../validations/signup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function Signup() {
  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupScheme) });

  // Get props from register form
  const { name: emailLabel, onChange: emailOnChange, onBlur: emailOnBlur, ref: emailRef } = register('email');
  const { name: pwLabel, onChange: pwOnChange, onBlur: pwOnBlur, ref: pwRef } = register('password');
  const { name: cpwLabel, onChange: cpwOnChange, onBlur: cpwOnBlur, ref: cpwRef } = register('passwordConfirmation');
  const { name: fnLabel, onChange: fnOnChange, onBlur: fnOnBlur, ref: fnRef } = register('firstname');
  const { name: lnLabel, onChange: lnOnChange, onBlur: lnOnBlur, ref: lnRef } = register('lastname');

  // Handle data that get from form
  const handleDataForm = (data) => {
    console.log(data);

    // Call API at here
  };

  return (
    <div className="mx-6 sm:mx-[100px] lg:mx-[20px] xl:mx-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5">
      {/* Modal */}
      <div className="col-span-4 md:px-5 md:col-start-2 lg:col-start-5 bg-white md:border md:border-br_gray md:my-5 py-4 rounded-lg">
        {/* Greeting */}
        <div className="flex flex-col items-center">
          <div className="w-20">
            <Link to="/">
              <img src={logo} alt="circle logo" />
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-h4 font-bold text-primary mt-2">Tạo tài khoản mới</h1>
            <p className="text-sm text-t_gray">Chào mừng đến với Examify</p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-3" onSubmit={handleSubmit(handleDataForm)}>
          <label className="text-h6 font-medium text-t_dark">
            Email*
            <Input
              rightIcon={<BiUser />}
              ref={emailRef}
              name={emailLabel}
              onChange={emailOnChange}
              onBlur={emailOnBlur}
            />
          </label>
          <p className="text-ac_red text-sm mt-1">{errors.email?.message}</p>

          <label className="col-span-3 text-h6 font-medium text-t_dark">
            Họ và tên đệm*
            <Input ref={fnRef} name={fnLabel} onChange={fnOnChange} onBlur={fnOnBlur} />
          </label>
          <p className="text-ac_red text-sm mt-1">{errors.firstname?.message}</p>

          <label className="col-span-2 text-h6 font-medium text-t_dark">
            Tên*
            <Input ref={lnRef} name={lnLabel} onChange={lnOnChange} onBlur={lnOnBlur} />
          </label>
          <p className="text-ac_red text-sm mt-1">{errors.lastname?.message}</p>

          <label className="text-h6 font-medium text-t_dark block mt-2">
            Mật khẩu*
            <Input
              type="password"
              rightIcon={<BiLockAlt />}
              ref={pwRef}
              name={pwLabel}
              onChange={pwOnChange}
              onBlur={pwOnBlur}
            />
          </label>
          <p className="text-ac_red text-sm mt-1">{errors.password?.message}</p>

          <label className="text-h6 font-medium text-t_dark block mt-2">
            Xác nhận mật khẩu*
            <Input
              type="password"
              rightIcon={<BiLockAlt />}
              ref={cpwRef}
              name={cpwLabel}
              onChange={cpwOnChange}
              onBlur={cpwOnBlur}
            />
          </label>
          <p className="text-ac_red text-sm mt-1">{errors.passwordConfirmation?.message}</p>

          <div className="mt-5">
            <Button width="100%">Đăng ký ngay</Button>
          </div>
        </form>

        {/* Direct sign in page */}
        <p className="text-sm text-center text-t_gray mt-3">
          Đã có tài khoản?{' '}
          <span className="text-ac_purple font-bold">
            <Link to="/signin">Đăng nhập ngay</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
