import { React } from 'react';
import authImg from '../assets/auth-page-img.png';
import logo from '../assets/circle_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from '../components/ui';
import { changePasswordScheme } from '../validations/changePassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { changePassword } from '../features/auth/authSlice';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(changePasswordScheme) });

  const value = watch();

  const handleDataForm = () => {
    console.log('data=> ', value.password);
    //Call API at here
    dispatch(
      changePassword({
        axiosPrivate,
        oldPassword: value.password,
        newPassword: value.password,
      }),
    );
    toast.success('Đổi mật khẩu thành công!');
    // Navigate if success
    navigate('/signin');
  };

  return (
    //layout
    <div className="mx-6 h-screen sm:px-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 items-center overflow-auto">
      {/* Modal */}
      <div className="min-w-[280px] h-[680px] flex my-6 col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 rounded-3xl md:border border-br_gray overflow-hidden items-center">
        {/* image */}
        <img src={authImg} alt="Auth" className="w-1/2 h-full object-cover hidden md:block" />
        {/* content */}
        <div className="h-fit w-full md:w-1/2 py-4 px-1 md:px-5 lg:px-10 flex flex-col justify-between">
          {/* header */}
          <div className="flex flex-col items-center">
            <div className="w-20">
              <Link to="/">
                <img src={logo} alt="Examify logo" />
              </Link>
            </div>
            <div className="text-center mb-10">
              <h1 className="text-h3 font-bold text-primary mt-2">Đặt lại mật khẩu</h1>
              <p className="text-sm text-t_gray">Hãy nhập mật khẩu mới của bạn</p>
            </div>
          </div>

          {/* body */}
          <form className="mt-3" onSubmit={() => handleDataForm()}>
            <div className="mt-2">
              <Input
                label="Mật khẩu"
                type="password"
                {...register('password')}
                onChange={(e) => setValue(e.target.value)}
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
                {...register('confirmPassword')}
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
      </div>
    </div>
  );
};

export default ChangePassword;
