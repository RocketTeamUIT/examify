import SubNav from '../../../components/ui/SubNav';
import Container from '../../../layouts/components/Container';
import bannerImg from '../../../assets/images/courseBanner.png';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function CourseList() {
  const [curr, setCurr] = useState(0);
  const location = useLocation();
  const { accessToken } = useSelector((store) => store.auth);

  const NAV_LIST = accessToken
    ? [
        {
          name: 'Khám phá',
          path: '/courses',
        },
        {
          name: 'Khoá học của tôi',
          path: '/courses/my-courses',
        },
      ]
    : [
        {
          name: 'Khám phá',
          path: '/courses',
        },
      ];

  useEffect(() => {
    if (location.pathname === '/courses') setCurr(0);
    else setCurr(1);
  }, [location]);

  return (
    <div className="mb-10">
      {/* Banner */}
      <Container className="py-5">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
      </Container>

      {/* Sub Navigation component*/}
      <SubNav navList={NAV_LIST} initialValue={curr} />

      <Outlet />
    </div>
  );
}

export default CourseList;
