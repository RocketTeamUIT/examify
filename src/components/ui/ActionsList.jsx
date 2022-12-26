import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiCheck } from 'react-icons/hi';

function ActionsList({ actionsList, onSelectItem, onChangeItem, ...props }) {
  const [itemActive, setItemActive] = useState(0);

  // Define ActionsList but actual used in ActionItem
  const handleClickItem = (index) => {
    setItemActive(index);
  };

  return (
    <ul
      className="min-w-[180px] max-w-[240px] py-2 bg-bg_white dark:bg-bg_black overflow-hidden rounded border border-br_light_gray dark:border-br_gray"
      {...props}
    >
      {actionsList.map((actionItem, index) => (
        <ActionItem
          testid={`test-item-${index}`}
          key={index}
          isActive={index === itemActive}
          onClick={() => handleClickItem(index)}
        >
          {actionItem.name}
        </ActionItem>
      ))}
    </ul>
  );
}

export function ActionItem({ children, isActive, onClick: handleOnClick, testid }) {
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

ActionsList.defaultProps = {
  actionsList: [],
  onSelectItem: () => {},
  onChangeItem: () => {},
};

ActionsList.propTypes = {
  actionsList: PropTypes.array,
  onSelectItem: PropTypes.func,
  onChangeItem: PropTypes.func,
};

export default ActionsList;
