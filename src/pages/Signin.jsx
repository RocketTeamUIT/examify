import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

  // Handle data that get from form
  const handleDataForm = (data) => {
    // Get email, password
    const { email, password } = data;

    console.log(email, password);

    // Call API at here
  };

  return (
    // Layout
    <div className=" mx-6 sm:mx-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5">
      {/* Modal */}
      <div className="min-w-[280px] col-span-4 md:px-6 md:col-start-2 lg:col-start-5 bg-white md:border md:border-br_gray md:mt-5 py-4 rounded-lg">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="w-20">
            <Link to="/">
              <img src={logo} alt="circle logo" />
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-h4 font-bold text-primary mt-2">Mừng trở lại</h1>
            <p className="text-h6 text-t_gray">Hãy điền thông tin của bạn!</p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-5" onSubmit={handleSubmit(handleDataForm)}>
          <label className="text-h6 font-medium text-t_dark">
            Email
            <Input rightIcon={<BiUser />} label="email" register={register} />
          </label>
          <p className="text-ac_red text-sm mt-1">{errors.email?.message}</p>

          <label className="text-h6 mt-4 block font-medium text-t_dark">
            Password
            <Input rightIcon={<BiLockAlt />} type="password" label="password" register={register} />
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

        {/* Footer */}
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
