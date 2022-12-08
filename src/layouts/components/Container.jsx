import classNames from 'classnames';
import React from 'react';
import * as PropTypes from 'prop-types';

const Container = ({ children, className, overflowVisible, id }) => {
  return (
    <div className={classNames('bg-white flex justify-center', className)} id={id}>
      <div
        className={classNames('max-w-primary flex-1 px-6 md:px-8 lg:px-[100px]', !overflowVisible && 'overflow-auto')}
      >
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  overflowVisible: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Container;
