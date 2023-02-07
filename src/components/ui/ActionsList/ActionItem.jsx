import PropTypes from 'prop-types';
import { HiCheck, HiChevronRight } from 'react-icons/hi';

function ActionItem({ type, children, isActive, isParent, onClick: handleOnClick, testid }) {
  return (
    <li
      data-testid={testid}
      onClick={handleOnClick}
      className="flex items-center justify-between px-3 py-2 text-t_dark dark:text-t_light_gray text-h6 font-medium cursor-pointer hover:bg-bg_light_gray dark:hover:bg-bg_dark_gray active:bg-bg_dark_gray active:text-t_light_gray dark:active:bg-bg_light_gray dark:active:text-t_dark"
    >
      <span className="flex-1 text-left">{children}</span>
      {type === 'active' && isActive && (
        <span title="icon" className="text-t_dark dark:text-t_white">
          <HiCheck />
        </span>
      )}
      {type === 'menu' && isParent && (
        <span title="icon" className="text-t_dark dark:text-t_white">
          <HiChevronRight size={18} />
        </span>
      )}
    </li>
  );
}

ActionItem.defaultProps = {
  isActive: false,
  onClick: () => {},
};

ActionItem.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node, // Để node sau này upgrade component này cho dễ
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ActionItem;
