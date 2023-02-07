import React, { useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';
import useClickOutside from '../../hooks/useClickOutside';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Link } from 'react-router-dom';
import config from 'config';

const Avatar = ({ avt, lastName, firstName, email }) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const hide = () => setVisible(false);
  const dispatch = useDispatch();
  const ref = useRef();
  const triggerElRef = useRef();
  const axiosPrivate = useAxiosPrivate(true);

  useClickOutside(ref, triggerElRef, (e) => {
    hide();
  });
  const Divider = () => <div className="border-t-[0.5px] border-br_light_gray my-3"></div>;

  return (
    <HeadlessTippy
      visible={visible}
      interactive
      onClickOutside={hide}
      render={(attrs) => (
        <ul
          {...attrs}
          className="w-fit bg-white rounded-[10px] shadow-sd_primary py-3 text-sm font-medium text-t_gray"
          ref={ref}
        >
          {/* Avatar and name */}
          <Link data-testid="user-info-direct" to={config.routes.userProfile}>
            <li className="flex items-center gap-3 px-6">
              <img src={avt} alt={lastName} className="rounded-full h-10 w-10" />
              <div>
                <p className="text-md font-medium">
                  {firstName} {lastName}
                </p>
                <p className="text-[10px] text-t_light_gray_2 font-light">{email}</p>
              </div>
            </li>
          </Link>

          <Divider />
          <Link to={config.routes.myCourses}>
            <li className="hover:font-semibold hover:text-t_dark cursor-pointer px-6">Khoá học của tôi</li>
          </Link>

          <Link to={config.routes.myFlashcards}>
            <li className="hover:font-semibold hover:text-t_dark cursor-pointer px-6 mt-2">Flashcard của tôi</li>
          </Link>
          <Divider />
          <Link to={config.routes.myExams}>
            <li className="hover:font-semibold hover:text-t_dark cursor-pointer px-6 mt-2">Lịch sử làm đề</li>
          </Link>
          <Link to={config.routes.myContests}>
            <li className="hover:font-semibold hover:text-t_dark cursor-pointer px-6 mt-2">Lịch sử thi đấu</li>
          </Link>
          <Divider />
          <li
            className="hover:font-semibold hover:text-t_dark cursor-pointer px-6 mt-2"
            onClick={() => dispatch(logOut(axiosPrivate))}
          >
            Đăng xuất
          </li>
        </ul>
      )}
    >
      <div className="flex items-center gap-4 cursor-pointer" ref={triggerElRef} onClick={toggle}>
        <span className="text-md font-semibold md:block hidden">{lastName}</span>
        <img src={avt} alt={lastName} className="rounded-full h-8 w-8" />
      </div>
    </HeadlessTippy>
  );
};

export default Avatar;
