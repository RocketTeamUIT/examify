import { useState } from 'react';
import GroupButtonTabsItem from './GroupButtonTabsItem';
import classNames from 'classnames';

function GroupButtonTabs({ tabList, mtContentDock = 0, className }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <div className={classNames('flex overflow-x-scroll', className)}>
        {tabList.map((groupButtonItem, index) => (
          <GroupButtonTabsItem
            onClick={() => activateTab(index)}
            active={index === activeTabIndex}
            first={index === 0 ? true : false}
            last={index === tabList.length - 1 ? true : false}
            key={index}
          >
            {groupButtonItem.title}
          </GroupButtonTabsItem>
        ))}
      </div>
      <div style={{ marginTop: mtContentDock }}>{tabList[activeTabIndex].element}</div>
    </>
  );
}

export default GroupButtonTabs;
