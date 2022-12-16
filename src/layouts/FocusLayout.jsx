import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import Header from './components/Header';
import { getCourseDetail } from '../features/course/courseSlice';

function FocusLayout({ children }) {
  const { accessToken } = useSelector((store) => store.auth);
  const location = useLocation();
  const { courseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(
        getCourseDetail({
          accessToken,
          courseId,
        }),
      );
    }
  }, [courseId, accessToken, dispatch]);

  if (!accessToken)
    return (
      <div>
        <Header />
        <div className="h-[calc(100vh-60px)] flex">
          <h3 className="italic font-semibold m-auto">
            Vui lòng{' '}
            <Link
              to="/signin"
              state={{
                from: location,
              }}
              className="text-primary underline"
            >
              đăng nhập
            </Link>{' '}
            để truy cập
          </h3>
        </div>
      </div>
    );

  return (
    // Wrapper
    <div>
      <Header />
      {children}
    </div>
  );
}

FocusLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FocusLayout;
