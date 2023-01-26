import { React, useCallback } from 'react';
import { GroupButtonTabs } from '../../components';
import LayoutMap from '../../ExamTaking/Main/Layouts';

function Main({ tackle }) {
  const dataMapping = useCallback((data = []) => {
    return data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        element: <LayoutMap part={item.name} data={item.data} />,
      };
    });
  }, []);
  return (
    <div className="min-h-screen bg-white flex-shrink-0 flex-grow-0 basis-4/5 max-w-full rounded-lg py-6 px-4">
      <GroupButtonTabs tabList={dataMapping(tackle)} mtContentDock="40px" nextMode={true} />
    </div>
  );
}

export default Main;
