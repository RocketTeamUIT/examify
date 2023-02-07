import React from 'react';
import classNames from 'classnames';
import { HiOutlineChevronRight } from 'react-icons/hi';
import PropTypes from 'prop-types';

/* Props
- hierarchy: array include items
*/

export function BreadcrumbItem({ children, isCurrent = false }) {
  return (
    <li
      className={classNames(
        'flex items-center px-2 w-fit h-6 rounded overflow-hidden bg-transparent bg-clip-padding border border-br_gray max-w-[200px]',
        {
          'bg-br_gray': isCurrent,
        },
      )}
    >
      <span
        className={classNames(
          'font-medium text-h6 text-t_dark dark:text-t_light_gray max-w-full overflow-hidden text-ellipsis whitespace-nowrap',
          // if is the current element in hierarchy
          { 'text-t_gray': isCurrent },
        )}
      >
        {children}
      </span>
    </li>
  );
}

function Breadcrumb({ hierarchy }) {
  return (
    // Wrapper
    <ol aria-label="breadcrumb" className="flex gap-2 items-center">
      {hierarchy.map((data, index) => (
        <React.Fragment key={index}>
          {/* Items */}
          <BreadcrumbItem isCurrent={hierarchy.length === index + 1}>{data}</BreadcrumbItem>
          {/* Icon */}
          {hierarchy.length !== index + 1 && <HiOutlineChevronRight className="dark:text-t_gray" />}
        </React.Fragment>
      ))}
    </ol>
  );
}

BreadcrumbItem.propTypes = {
  isCurrent: PropTypes.bool,
};

Breadcrumb.propTypes = {
  hierarchy: function (props, propName, componentName) {
    if (!Array.isArray(props.hierarchy) || props.hierarchy < 2) {
      return new Error(`${propName} must be an array and have at least 2 elements`);
    }
  },
};

export default Breadcrumb;
