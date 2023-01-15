import PropTypes from 'prop-types';
import { HiCheck } from 'react-icons/hi';

function ActionItem({ children, isActive, onClick: handleOnClick, testid }) {
  return (
    <li
      data-testid={testid}
      onClick={handleOnClick}
      className="flex items-center justify-between px-3 py-2 text-t_dark dark:text-t_light_gray text-h6 font-medium cursor-pointer hover:bg-bg_light_gray dark:hover:bg-bg_dark_gray active:bg-bg_dark_gray active:text-t_light_gray dark:active:bg-bg_light_gray dark:active:text-t_dark"
    >
      <span>{children}</span>
      {isActive && (
        <span title="icon" className="text-t_dark dark:text-t_white">
          <HiCheck />
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
  children: PropTypes.node, // Để node sau này upgrade component này cho dễ
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ActionItem;
