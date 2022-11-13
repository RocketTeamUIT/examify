import authImg from '../assets/auth-page-img.png';
import logo from '../assets/circle_logo.png';
import { Link } from 'react-router-dom';
import { BiUser, BiLockAlt } from 'react-icons/bi';
import { Input, Button } from '../components/ui';

function Signup() {
  return (
    //layout
    <div className="mx-6 sm:h-screen grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 items-center">
      {/* Modal */}
      <div className="min-w-[280px] max-h-[680px] max-w-[810px] flex my-6 col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 rounded-3xl md:border border-br_gray overflow-hidden">
        {/* image */}
        <img src={authImg} alt="Auth image" className="w-1/2 h-full object-cover hidden md:block" />
        {/* content */}
        <div className="w-full md:w-1/2 py-4 px-1 md:px-5">
          {/* header */}
          <div className="flex flex-col items-center">
            <div className="w-20">
              <Link to="/">
                <img src={logo} alt="Examify logo" />
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-h4 font-bold text-primary mt-2">Tạo tài khoản mới</h1>
              <p className="text-h6 text-t_gray">Chào mừng đến với Examify</p>
            </div>
          </div>

          {/* body */}
          <div>
            <form className="mt-5">
              <label className="text-h6 font-medium text-t_dark">
                Email*
                <Input rightIcon={<BiUser />} />
              </label>

              <label className="text-h6 font-medium text-t_dark md:hidden block mt-4">
                Họ và tên*
                <Input />
              </label>

              <div className="hidden md:flex justify-between mt-4">
                <label className="text-h6 font-medium text-t_dark w-1/2">
                  Họ và tên đệm*
                  <Input />
                </label>
                <label className="text-h6 font-medium text-t_dark ml-2">
                  Tên*
                  <Input width="150px" />
                </label>
              </div>

              <label className="text-h6 font-medium text-t_dark block mt-4">
                Mật khẩu*
                <Input rightIcon={<BiLockAlt />} />
              </label>

              <label className="text-h6 font-medium text-t_dark  block mt-4">
                Xác nhận mật khẩu*
                <Input rightIcon={<BiLockAlt />} />
              </label>

              <div className="mt-8">
                <Button width="100%">Đăng ký ngay</Button>
              </div>
            </form>

            {/* hoc thử miễn phí */}
            <div className="mt-4">
              <Button width="100%" type="default">
                Học thử miễn phí
              </Button>
            </div>
          </div>

          {/* footer */}
          <p className="text-sm text-center text-t_gray mt-5">
            Đã có tài khoản?{' '}
            <span className="text-ac_purple font-bold">
              <Link to="/signin">Đăng nhập ngay</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
