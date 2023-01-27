import authImg from '../assets/auth-page-img.png';
import logo from '../assets/circle_logo.png';
import { FcGoogle } from 'react-icons/fc';
import { Input, Button } from '../components/ui';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { forgetPasswordScheme } from '../validations/forgetPassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function ForgetPassword() {
  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgetPasswordScheme) });

  // Get props from register form
  const { name: emailLabel, onChange: emailOnChange, onBlur: emailOnBlur, ref: emailRef } = register('email');

  // Handle data that get from form
  const handleDataForm = (data) => {
    console.log(data);

    // Call API at here
  };

  return (
    //layout
    <div className="mx-6 h-screen sm:mx-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 items-center">
      {/* Modal */}
      <div className="h-fit min-w-[280px] flex my-6 max-h-[700px] col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 rounded-3xl md:border border-br_gray overflow-hidden items-center">
        {/* image */}
        <img src={authImg} alt="Auth" className="w-1/2 h-full object-cover hidden md:block" />
        {/* content */}
        <div className="h-full w-full md:w-1/2 py-4 px-1 md:px-5 lg:px-10 flex flex-col justify-between">
          {/* Greeting */}
          <div className="flex flex-col items-center">
            <div className="w-20">
              <Link to="/">
                <img src={logo} alt="Examify logo" />
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-h3 font-bold text-primary mt-2">Quên mật khẩu?</h1>
              <p className="text-sm text-t_gray">
                Chúng tôi sẽ gửi một liên kết để đặt lại mật khẩu. Vui lòng nhập email bạn dùng để đăng ký tài khoản
              </p>
            </div>
          </div>

          {/* body */}
          <div className="h-3/5 flex flex-col justify-between mt-4">
            {/* Form */}
            <form onSubmit={handleSubmit(handleDataForm)}>
              <div>
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

              <div className="mt-8">
                <Button width="100%">Đặt lại mật khẩu</Button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6 justify-between">
              <span className="border-t-[0.5px] border-br_gray w-[45%]" />
              <span>or</span>
              <span className="border-t-[0.5px] border-br_gray w-[45%]" />
            </div>

            {/* Sign in with google */}
            <div>
              <Button leftIcon={<FcGoogle size={24} />} type="default" width="100%">
                Đăng nhập bằng Google
              </Button>

              {/* Direct sign up page */}
              <p className="text-sm text-center text-t_gray mt-5">
                Bạn chưa có tài khoản?{' '}
                <span className="text-ac_purple font-bold">
                  <Link to="/signup">Đăng ký ngay</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
