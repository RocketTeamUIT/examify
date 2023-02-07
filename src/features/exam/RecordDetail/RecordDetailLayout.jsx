import Container from '../../../layouts/components/Container';
import PropTypes from 'prop-types';

function RecordDetailLayout({ children }) {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-5">
        <div className="mt-8 mb-20 col-start-3 col-span-8">{children}</div>
      </div>
    </Container>
  );
}

RecordDetailLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecordDetailLayout;
