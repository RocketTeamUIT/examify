import { useState } from 'react';
import GroupButtonTabsItem from './GroupButtonTabsItem';

function GroupButtonTabs({ tabList, mtContentDock = 0 }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <div className="flex">
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
