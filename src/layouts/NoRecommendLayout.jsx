import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';

function NoRecommendLayout({ children }) {
  return (
    // Wrapper
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

NoRecommendLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoRecommendLayout;
