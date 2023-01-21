import PropTypes from 'prop-types';
import ActionItem from './ActionItem';
import { useState } from 'react';

function ActionsList({ actionsList, onSelectItem, onChangeItem, initialState, ...props }) {
  const [itemActive, setItemActive] = useState(initialState);

  // Define ActionsList but actual used in ActionItem
  const handleClickItem = (title, action, index) => {
    setItemActive(index);
    onSelectItem(); // Hide Actions list when we click on item
    onChangeItem(title);
    action();
  };

  const renderActionItemList = () => {
    return actionsList.map((actionItem, index) => (
      <ActionItem
        testid={`test-item-${index}`}
        key={index}
        isActive={index === itemActive}
        onClick={() => handleClickItem(actionItem.name, actionItem.func, index)}
      >
        {actionItem.name}
      </ActionItem>
    ));
  };

  return (
    <ul
      className="overflow-y-auto max-h-[240px] min-w-[180px] max-w-[240px] py-2 bg-bg_white dark:bg-bg_black overflow-hidden rounded border border-br_light_gray dark:border-br_gray"
      {...props}
    >
      {renderActionItemList()}
    </ul>
  );
}

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
