import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Select = forwardRef((props, ref) => {
  const { children, ...rest } = props;

  return (
    <select
      className="outline-none pl-3 pr-4 h-11 text-md bg-bg_light_gray_2 rounded-lg w-full focus-within:outline focus-within:outline-2 outline-ac_blue relative bg-transparent"
      ref={ref}
      {...rest}
    >
      {children}
    </select>
  );
});

Select.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Select;
