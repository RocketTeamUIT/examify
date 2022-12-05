import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signinScheme } from '../validations/signin';

import logo from '../assets/circle_logo.png';
import { FcGoogle } from 'react-icons/fc';
import { Input, Button } from '../components/ui';
import { Link } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';

function Signin() {
  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinScheme) });

  // Get props from register form
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
    <div className="h-screen mx-6 sm:mx-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5">
      {/* Modal */}
      <div className="min-w-[280px] col-span-4 md:px-6 md:col-start-2 lg:col-start-5 bg-white md:border md:border-br_gray my-auto py-4 rounded-lg">
        {/* Greeting */}
        <div className="flex flex-col items-center">
          <div className="w-20">
            <Link to="/">
              <img src={logo} alt="circle logo" />
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-h4 font-bold text-primary mt-2">Mừng trở lại</h1>
            <p className="text-sm text-t_gray">Hãy điền thông tin của bạn!</p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-5" onSubmit={handleSubmit(handleDataForm)}>
          <div className="mt-10">
            <Input
              label="Email"
              rightIcon={<MdAlternateEmail />}
              ref={emailRef}
              name={emailLabel}
              onChange={emailOnChange}
              onBlur={emailOnBlur}
              fancyOutlined
              status={errors.email?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.email?.message}</p>
          </div>

          <div className="mt-6">
            <Input
              label="Mật khẩu"
              type="password"
              ref={pwRef}
              name={pwLabel}
              onChange={pwOnChange}
              onBlur={pwOnBlur}
              fancyOutlined
              visibilityToggle
              status={errors.password?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.password?.message}</p>
          </div>

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

        {/* Direct sign up page */}
        <p className="text-sm text-center text-t_gray mt-5">
          Bạn chưa có tài khoản?{' '}
          <span className="text-ac_purple font-bold">
            <Link to="/signup">Đăng ký ngay</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
