// This Navbar is placehoder component:

import { useRef, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { memo } from 'react';
import Container from '../../layouts/components/Container';
import { Link } from 'react-router-dom';
import useClickOutside from '../../hooks/useClickOutside';

function SubNav() {
  const [isShowNav, setShowNav] = useState(false);
  const ref = useRef();
  const triggerRef = useRef();
  useClickOutside(ref, triggerRef, () => {
    setShowNav(false);
  });

  return (
    <Container className="shadow-sd_primary relative" overflowVisible>
      <div className="h-[40px] md:h-[60px]">
        <div className="relative md:hidden flex items-center h-full">
          <div ref={triggerRef} className="cursor-pointer">
            <BiMenu className="text-[20px]" onClick={() => setShowNav(!isShowNav)} />
          </div>
          <div
            ref={ref}
            className={`${
              isShowNav ? 'flex' : 'hidden'
            } flex-col gap-2 absolute bg-white text-body-sm p-3 z-10 left-0 top-8 shadow-sd_primary rounded-md`}
          >
            <Link to="/courses" className="text-primary">
              Khám phá
            </Link>
            <Link to="/">Khóa học của tôi</Link>
          </div>
        </div>
        <div className="hidden md:flex h-full gap-5 items-center sticky top-0 left-0 right-0">
          <Link
            to="/courses"
            className="h-full flex items-center relative before:absolute before:bottom-0 before:w-full before:h-[6px] before:rounded-sm before:bg-primary"
          >
            <p className="text-primary">Khám phá</p>
          </Link>
          <Link to="/">
            <p>Khóa học của bạn</p>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default memo(SubNav);
