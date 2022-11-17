import PropTypes from 'prop-types';
import Header from './components/Header';

function FocusLayout({ children }) {
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
