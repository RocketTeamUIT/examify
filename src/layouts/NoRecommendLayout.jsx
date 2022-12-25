import PropTypes from 'prop-types';
import Footer from './components/Footer';
import Header from './components/Header';

function NoRecommendLayout({ children }) {
  return (
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
