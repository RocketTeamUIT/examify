import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';

function AuthLayout({ children }) {
  return (
    // Wrapper
    <div>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
