import GroupButtonTabs from '../../components/GroupButtonTabs/GroupButtonTabs';
import Table from './Table';
import { useOutletContext } from 'react-router-dom';
import { useCallback } from 'react';

function RecordDetailIndex() {
  // eslint-disable-next-line no-unused-vars
  const [_, partIdListGrByHashtag] = useOutletContext();

  const formatData = useCallback(() => {
    const tempData = partIdListGrByHashtag.map((item) => ({
      ...item,
      title: item.name,
      element: <Table data={item.partAnswerGrByList} />,
    }));

    const totalData = tempData.reduce((acc, curValue) => [...acc, ...curValue.partAnswerGrByList], []);
    tempData.push({
      title: 'Tất cả',
      element: <Table data={totalData} />,
    });

    return tempData;
  }, [partIdListGrByHashtag]);

  return (
    <div>
      <GroupButtonTabs tabList={formatData()} mtContentDock="20px" />
    </div>
  );
}

export default RecordDetailIndex;
