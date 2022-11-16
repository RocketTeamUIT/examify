import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo_light.svg';

function Footer() {
  const [dark, setDark] = useState(false);

  return (
    <div className="bg-bg_dark_gray pt-12 pb-9 text-white flex justify-center">
      <div className="max-w-primary px-6 md:px-8 lg:px-[100px] flex-1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16">
          {/* Examify */}
          <div>
            <h6 className="font-bold">Examify</h6>

            <div className="mt-[35px] space-y-2 text-md">
              <Link to="#" className="block">
                Về chúng tôi
              </Link>
              <Link to="#" className="block">
                Liên hệ
              </Link>
              <Link to="#" className="block">
                Việc làm
              </Link>
              <Link to="#" className="block">
                Bằng cấp
              </Link>
              <Link to="#" className="block">
                Cho doanh nghiệp
              </Link>
              <Link to="#" className="block">
                Cho chính phủ
              </Link>
              <Link to="#" className="block">
                Cho đại học
              </Link>
              <Link to="#" className="block">
                Trở thành thành viên
              </Link>
              <Link to="#" className="block">
                Đầu tư
              </Link>
            </div>
          </div>

          {/* Cộng đồng */}
          <div>
            <h6 className="font-bold">Cộng đồng</h6>

            <div className="mt-[35px] space-y-2 text-md">
              <Link to="#" className="block">
                Học viên{' '}
              </Link>
              <Link to="#" className="block">
                Thành viên
              </Link>
              <Link to="#" className="block">
                Các nhà phát triển
              </Link>
              <Link to="#" className="block">
                Phiên dịch viên
              </Link>
              <Link to="#" className="block">
                Blog
              </Link>
              <Link to="#" className="block">
                Trung tâm dạy
              </Link>
            </div>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h6 className="font-bold">Hỗ trợ</h6>

            <div className="mt-[35px] space-y-2 text-md">
              <Link to="#" className="block">
                Hướng dẫn sử dụng
              </Link>
              <Link to="#" className="block">
                Hướng dẫn mua hàng
              </Link>
              <Link to="#" className="block">
                Chăm sóc khách hàng
              </Link>
              <Link to="#" className="block">
                Phản hồi khiếu nại
              </Link>
            </div>
          </div>

          {/* Dark mode */}
          <div className="flex md:justify-end gap-3 font-bold ">
            <span>Light</span>

            {/* Toggle */}
            <button className="h-6 w-11 bg-t_gray rounded-full relative" onClick={() => setDark(!dark)}>
              <div
                className={classNames(
                  'h-4 w-4 rounded-full bg-white absolute transition top-1 left-1',
                  dark && 'translate-x-5',
                )}
              />
            </button>
            <span>Dark</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-br_gray_2 mt-8" />

        <div className="mt-4 flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="Examify Logo" className="h-10" />
          </Link>

          <p className="text-sm">2022 Examify, Inc</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
