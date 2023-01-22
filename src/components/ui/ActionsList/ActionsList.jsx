import PropTypes from 'prop-types';
import ActionItem from './ActionItem';
import { useEffect, useState } from 'react';
import HeaderActionItem from './HeaderActionItem';

/*
  type: `active | menu` || Default value: active
*/

function ActionsList({ data, onSelectItem, onChangeItem, initialState, ...props }) {
  const [itemActive, setItemActive] = useState(initialState);
  const [history, setHistory] = useState([data]);
  const currentState = history[history.length - 1];

  // Call function map with initialState
  useEffect(() => {
    if (currentState.type === 'active') currentState.actionsList[initialState].action();
  }, [currentState, initialState]);

  // Define ActionsList but actual used in ActionItem
  const handleClickItem = (title, action, index) => {
    setItemActive(index);
    onSelectItem(); // Hide Actions list when we click on item
    onChangeItem(title);
    action();
  };

  const handleBack = () => {
    const comeBackPrevState = [...history];
    comeBackPrevState.pop();
    setHistory(comeBackPrevState);
  };

  const renderActionItemList = () => {
    return currentState.actionsList.map((actionItem, index) => {
      const isParent = !!actionItem.actionsList;

      return (
        <ActionItem
          type={currentState.type}
          testid={`test-item-${index}`}
          key={index}
          isActive={currentState.type === 'active' && index === itemActive}
          isParent={isParent}
          onClick={() => {
            // If menu has child
            if (isParent) {
              setHistory((prev) => [...prev, actionItem]);
            } else handleClickItem(actionItem.title, actionItem.action, index);
          }}
        >
          {actionItem.title}
        </ActionItem>
      );
    });
  };

  return (
    <ul
      className="overflow-y-auto max-h-[240px] min-w-[180px] max-w-[240px] py-2 bg-bg_white dark:bg-bg_black overflow-hidden rounded border border-br_light_gray dark:border-br_gray"
      {...props}
    >
      {history.length > 1 && <HeaderActionItem title={currentState.title} onBack={handleBack} />}
      {renderActionItemList()}
    </ul>
  );
}

ActionsList.defaultProps = {
  data: {},
  onSelectItem: () => {},
  onChangeItem: () => {},
};

ActionsList.propTypes = {
  data: PropTypes.object,
  onSelectItem: PropTypes.func,
  onChangeItem: PropTypes.func,
};

export default ActionsList;
