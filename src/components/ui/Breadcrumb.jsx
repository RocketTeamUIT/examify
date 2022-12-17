import React from 'react';
import classNames from 'classnames';
import { HiOutlineChevronRight } from 'react-icons/hi';
import PropTypes from 'prop-types';

/* Props
- hierarchy: array include items
*/

function BreadcrumbItem({ children, isCurrent = false }) {
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
          'font-medium text-h6 text-t_dark dark:text-t_light_gray',
          // if is the current element in hierarchy
          { 'text-t_gray': isCurrent },
        )}
      >
        {children}
      </span>
    </div>
  );
}

function Breadcrumb({ hierarchy }) {
  return (
    // Wrapper
    <div className="flex gap-2 items-center">
      {hierarchy.map((data, index) => (
        <React.Fragment key={index}>
          {/* Items */}
          <BreadcrumbItem isCurrent={hierarchy.length === index + 1}>{data}</BreadcrumbItem>
          {/* Icon */}
          {hierarchy.length !== index + 1 && <HiOutlineChevronRight className="dark:text-t_gray" />}
        </React.Fragment>
      ))}
    </div>
  );
}

BreadcrumbItem.propTypes = {
  isCurrent: PropTypes.bool,
};

Breadcrumb.propTypes = {
  hierarchy: PropTypes.array.isRequired,
};

export default Breadcrumb;
