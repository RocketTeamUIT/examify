import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiCheck } from 'react-icons/hi';

// Sau này component phình to sẽ tách ra
function ActionsList({ actionsList, onSelectItem, onChangeItem, ...props }) {
  const [check, setCheck] = useState(0);

  const handleClickItem = (title, index) => {
    setCheck(index);
    onSelectItem(); // Hide Actions list when we click on item
    onChangeItem(title);
  };

  return (
    <div
      className="min-w-[180px] max-w-[240px] py-2 bg-bg_white dark:bg-bg_black overflow-hidden rounded border border-br_light_gray dark:border-br_gray"
      {...props}
    >
      {actionsList.map((data, index) => (
        <ActionItem index={index} key={index} check={index === check} onAction={data.func} onClick={handleClickItem}>
          {data.name}
        </ActionItem>
      ))}
      <Divider />
      <ActionItem>Action item 4</ActionItem>
    </div>
  );
}

function ActionItem({ children, check, index, onClick, onAction }) {
  const handleOnClick = () => {
    onClick(children, index);
    onAction();
  };

  return (
    <div
      onClick={handleOnClick}
      className="flex items-center justify-between px-3 py-2 text-t_dark dark:text-t_light_gray text-h6 font-medium cursor-pointer hover:bg-bg_light_gray dark:hover:bg-bg_dark_gray active:bg-bg_dark_gray active:text-t_light_gray dark:active:bg-bg_light_gray dark:active:text-t_dark"
    >
      <span>{children}</span>
      <span className="text-t_dark dark:text-t_white">{check && <HiCheck />}</span>
    </div>
  );
}

function Divider() {
  return <div className="my-2 h-[1px] bg-br_light_gray dark:bg-br_gray"></div>;
}

ActionItem.defaultProps = {
  check: false,
  index: 0,
  onClick: () => {},
  onAction: () => {},
};

ActionItem.propTypes = {
  children: PropTypes.node, // Để node sau này upgrade component này cho dễ
  check: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func,
  onAction: PropTypes.func,
};

ActionsList.propTypes = {
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
