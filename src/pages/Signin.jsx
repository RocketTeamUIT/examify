import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import authImg from '../assets/auth-page-img.png';
import logo from '../assets/circle_logo.png';
import { FcGoogle } from 'react-icons/fc';
import { Input, Button } from '../components/ui';
import { Link } from 'react-router-dom';
import { BiUser, BiLockAlt } from 'react-icons/bi';

import { signinScheme } from '../validations/signin';

function Signin() {
  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinScheme) });

  const { name: emailLabel, onChange: emailOnChange, onBlur: emailOnBlur, ref: emailRef } = register('email');
  const { name: pwLabel, onChange: pwOnChange, onBlur: pwOnBlur, ref: pwRef } = register('password');

  // Handle data that get from form
  const handleDataForm = (data) => {
    // Get email, password
    const { email, password } = data;

    console.log(email, password);

    // Call API at here
  };

  return (
    // Layout
    <div className="mx-6 h-screen sm:mx-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 items-center">
      {/* Modal */}
      <div className="h-[680px] overflow-hidden min-h-fit min-w-[280px] flex my-6 col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 rounded-3xl md:border border-br_gray items-center">
        {/* image */}
        <img src={authImg} alt="Auth image" className="w-1/2 h-full object-cover hidden md:block" />
        {/* Content */}
        <div className="h-full w-full md:w-1/2 md:py-7 py-4 px-1 md:px-5 lg:px-10 flex flex-col justify-between">
          {/* Header */}
          <div className="flex flex-col items-center">
            <div className="w-20">
              <Link to="/">
                <img src={logo} alt="circle logo" />
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-h3 font-bold text-primary mt-2">Mừng trở lại</h1>
              <p className="text-sm text-t_gray">Hãy điền thông tin của bạn!</p>
            </div>
          </div>

          {/* Body */}
          <div>
            {/* Form */}
            <form className="mt-5" onSubmit={handleSubmit(handleDataForm)}>
              <label className="text-h6 font-medium text-t_dark">
                Email
                <Input
                  rightIcon={<BiUser />}
                  ref={emailRef}
                  name={emailLabel}
                  onChange={emailOnChange}
                  onBlur={emailOnBlur}
                />
              </label>
              <p className="text-ac_red text-sm mt-1">{errors.email?.message}</p>

              <label className="text-h6 mt-4 block font-medium text-t_dark">
                Password
                <Input
                  rightIcon={<BiLockAlt />}
                  type="password"
                  ref={pwRef}
                  name={pwLabel}
                  onChange={pwOnChange}
                  onBlur={pwOnBlur}
                />
              </label>
              <p className="text-ac_red text-sm mt-1">{errors.password?.message}</p>

              {/* actions */}
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <input type="checkbox" />
                  <span className="text-h6 ml-2 text-t_light_gray_2">Remember me</span>
                </div>

                <span className="text-h6 text-ac_purple">
                  <Link to="/forget-password">Quên mật khẩu?</Link>
                </span>
              </div>

              <div className="mt-8">
                <Button width="100%">Đăng nhập</Button>
              </div>
            </form>

            {/* Sign in with google */}
            <div className="mt-3">
              <Button leftIcon={<FcGoogle size={24} />} type="default" width="100%">
                Đăng nhập bằng Google
              </Button>
            </div>
          </div>

          {/* Footer */}
          <p className="text-sm text-center text-t_gray mt-5">
            Bạn chưa có tài khoản?{' '}
            <span className="text-ac_purple font-bold">
              <Link to="/signup">Đăng ký ngay</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
