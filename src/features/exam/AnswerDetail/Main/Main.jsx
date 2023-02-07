import { React, useCallback } from 'react';
import { GroupButtonTabs } from '../../components';
import LayoutMap from './Layouts';

function Main({ partList }) {
  const dataMapping = useCallback((data = []) => {
    return data.map((part) => {
      //moi item la 1 part
      return {
        id: part.id,
        title: part.name,
        element: <LayoutMap part={part.name} data={part.data} />,
      };
    });
  }, []);
  return (
    <div className="min-h-screen bg-white flex-shrink-0 flex-grow-0 basis-4/5 max-w-full rounded-lg py-6 px-4">
      <GroupButtonTabs tabList={dataMapping(partList)} mtContentDock="40px" />
    </div>
  );
}

export default Main;
