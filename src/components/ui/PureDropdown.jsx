import React from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const PureDropdown = ({ children, visible, hide, actionList }) => {
  return (
    <div className="z-10">
      <TippyHeadless
        interactive
        visible={visible}
        onClickOutside={hide}
        placement="bottom-start"
        render={(attrs) => (
          <ul className="bg-white rounded-lg shadow-sd_large p-1 space-y-1" {...attrs}>
            {actionList.map((action, index) => (
              <DropdownItem {...action} key={index} hide={hide} />
            ))}
          </ul>
        )}
      >
        {children}
      </TippyHeadless>
    </div>
  );
};

PureDropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  visible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  actionList: PropTypes.array.isRequired,
};

const DropdownItem = ({ danger, title, func, hide, icon, hideOnClick = true }) => {
  const handleClick = (e) => {
    func && func(e);
    hideOnClick && hide();
  };

  return (
    <li
      className={classNames('py-2 px-3 transition cursor-pointer rounded-lg duration-300 flex items-center gap-3', {
        'hover:bg-bg_light_gray_2 text-t_dark': !danger,
        'hover:bg-ac_red hover:text-white text-ac_red': danger,
      })}
      onClick={handleClick}
    >
      {icon}
      {title}
    </li>
  );
};

DropdownItem.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.node.isRequired,
  func: PropTypes.func,
  hide: PropTypes.func.isRequired,
  icon: PropTypes.node,
};

export default PureDropdown;
