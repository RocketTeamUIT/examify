import PropTypes from 'prop-types';
import Header from './components/Header';
import Recommend from './components/Recommend';
import Footer from './components/Footer';

function DefaultLayout({ children }) {
  return (
    // Wrapper
    <div>
      <Header />
      {children}
      <Recommend />
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
