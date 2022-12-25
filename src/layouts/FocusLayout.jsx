import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Header from './components/Header';
import isEmptyObject from '../utils/isEmptyObject';
import useFetchCourse from '../hooks/useFetchCourse';

function FocusLayout({ children }) {
  const { courseId } = useParams();
  const { courseDetail } = useSelector((store) => store.course);

  useFetchCourse();

  if (isEmptyObject(courseDetail) || !courseDetail.isJoin)
    return (
      <div>
        <Header />
        <div className="h-[calc(100vh-60px)] flex">
          <h3 className="italic font-semibold m-auto text-center">
            Bạn chưa đăng ký khoá học này <br />
            <Link to={`/courses/${courseId}/detail`} className="text-primary underline">
              Đăng ký ngay
            </Link>
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
