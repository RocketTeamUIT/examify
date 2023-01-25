import { useState } from 'react';
import GroupButtonTabsItem from './GroupButtonTabsItem';
import classNames from 'classnames';
import { Button } from 'components/ui';
import { HiArrowUturnLeft, HiArrowUturnRight } from 'react-icons/hi2';

function GroupButtonTabs({ tabList, mtContentDock = 0, className, nextMode = false }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  const scrollTopPage = () => {
    window.scrollTo({ top: 100 });
  };

  const directNextPage = () => {
    if (activeTabIndex === tabList.length - 1) return;
    scrollTopPage();
    activateTab(activeTabIndex + 1);
  };

  const directPrevPage = () => {
    if (activeTabIndex === 0) return;
    activateTab(activeTabIndex - 1);
  };

  return (
    <>
      <div className={classNames('flex overflow-x-scroll', className)}>
        {tabList.map(({ title, id }, index) => (
          <GroupButtonTabsItem
            id={id}
            onClick={() => activateTab(index)}
            active={index === activeTabIndex}
            first={index === 0 ? true : false}
            last={index === tabList.length - 1 ? true : false}
            key={index}
          >
            {title}
          </GroupButtonTabsItem>
        ))}
      </div>
      <div style={{ marginTop: mtContentDock }}>
        {tabList.map((item, index) => (
          <div key={index} className={classNames('hidden', { '!block': index === activeTabIndex })}>
            {item.element}
          </div>
        ))}
      </div>
      {nextMode && (
        <div className="flex justify-end gap-5 mt-10">
          <Button
            className={classNames({ hidden: activeTabIndex === 0 })}
            onClick={directPrevPage}
            height={36}
            type="outline"
            rightIcon={<HiArrowUturnLeft size={20} />}
          >
            Trang trước
          </Button>
          <Button
            className={classNames({ hidden: activeTabIndex === tabList.length - 1 })}
            onClick={directNextPage}
            height={36}
            rightIcon={<HiArrowUturnRight size={20} />}
          >
            Tiếp theo
          </Button>
        </div>
      )}
    </>
  );
}

export default GroupButtonTabs;
