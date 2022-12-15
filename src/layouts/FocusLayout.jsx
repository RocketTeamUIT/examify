import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

function FocusLayout({ children, excludeFooter, requireLogin }) {
  const { accessToken } = useSelector((store) => store.auth);
  const location = useLocation();

  if (!accessToken && requireLogin)
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

  if (excludeFooter)
    return (
      <div>
        <Header />
        {children}
      </div>
    );

  return (
    // Wrapper
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

FocusLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FocusLayout;
