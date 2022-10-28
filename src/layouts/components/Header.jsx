import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/ui';

const Header = () => {
  return (
    <div className="h-[60px] bg-white shadow-sd_primary flex justify-between items-center px-5">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Examify Logo - Learn and Practice English" className="h-10" />
      </Link>

      {/* Navigation Bar */}
      <ul className="flex items-center gap-6 text-md">
        {[
          ['Khoá học', '/course'],
          ['Đề thi', '/exam'],
          ['Flashcard', '/flashcard'],
          ['Thi đấu', '/contest'],
        ].map(([title, path], index) => (
          <li className="text-t_dark">
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button type="default" width="112px">
          Đăng nhập
        </Button>
        <Button type="primary" width="112px">
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default Header;
