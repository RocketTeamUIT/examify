// This Navbar is placehoder component:

import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { memo } from 'react';

function SubNav() {
  const [isShowNav, setShowNav] = useState(false);

  return (
    <div className="h-[40px] md:h-[60px] px-3 shadow-lg md:px-8 lg:px-[100px] z-10">
      <div className="relative md:hidden">
        <BiMenu className="text-[20px]" onClick={() => setShowNav(!isShowNav)} />
        <div
          className={`${
            isShowNav ? 'flex' : 'hidden'
          } flex-col gap-2 absolute bg-white text-body-sm p-3 z-10 left-0 top-5 shadow-2xl rounded-sm`}
        >
          <a href="/" className="text-primary">
            Khám phá
          </a>
          <a href="/">Khóa học của tôi</a>
        </div>
      </div>
      <div className=" hidden md:flex h-full gap-5 items-center sticky top-0 left-0 right-0">
        <a
          href="/"
          className="h-full flex items-center relative before:absolute before:bottom-0 before:w-full before:h-[6px] before:rounded-sm before:bg-primary"
        >
          <p className="text-primary">Khám phá</p>
        </a>
        <a href="/">
          <p>Khóa học của bạn</p>
        </a>
      </div>
    </div>
  );
}

export default memo(SubNav);
