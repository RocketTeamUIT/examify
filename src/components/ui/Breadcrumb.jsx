import React from 'react';
import classNames from 'classnames';
import { HiOutlineChevronRight } from 'react-icons/hi';
import PropTypes from 'prop-types';

/* Props
- hierarchy: array include items
- dark: dark mode
*/

function BreadcrumbItem({ children, isCurrent = false, dark = false }) {
  return (
    <div
      className={classNames(
        'flex items-center px-2 w-fit h-6 rounded overflow-hidden bg-transparent bg-clip-padding border border-br_gray',
        {
          'bg-br_gray': isCurrent,
        },
      )}
    >
      <span
        className={classNames(
          'font-medium text-h6 text-t_dark',
          // if is the current element in hierarchy
          { 'text-t_gray': isCurrent },

          // if is dark mode
          { 'text-t_light_gray': dark },
        )}
      >
        {children}
      </span>
    </div>
  );
}

function Breadcrumb({ hierarchy, dark = false }) {
  return (
    // Wrapper
    <div className="flex gap-2 items-center">
      {hierarchy.map((data, index) => (
        <React.Fragment key={index}>
          {/* Items */}
          <BreadcrumbItem isCurrent={hierarchy.length === index + 1} dark={dark}>
            {data}
          </BreadcrumbItem>
          {/* Icon */}
          {hierarchy.length !== index + 1 && <HiOutlineChevronRight className={classNames({ 'text-t_gray': dark })} />}
        </React.Fragment>
      ))}
    </div>
  );
}

BreadcrumbItem.propTypes = {
  children: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool,
  dark: PropTypes.bool,
};

Breadcrumb.propTypes = {
  hierarchy: PropTypes.arrayOf(PropTypes.string).isRequired,
  dark: PropTypes.bool,
};

export default Breadcrumb;
