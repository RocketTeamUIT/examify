import AnswerListing from './AnswerListing/AnswerListing';
import GroupButtonTabs from '../../components/GroupButtonTabs/GroupButtonTabs';
import { useOutletContext } from 'react-router-dom';
import { useCallback } from 'react';

function RecordDetailFullmode() {
  const [partIdList] = useOutletContext();

  const formatData = useCallback(() => {
    const tempData = partIdList.map((item) => ({
      ...item,
      title: item.name,
      element: <AnswerListing data={item.questionIdList} />,
    }));

    const totalData = tempData.reduce((acc, curValue) => [...acc, ...curValue.questionIdList], []);
    tempData.push({
      title: 'Tất cả',
      element: <AnswerListing data={totalData} />,
    });

    return tempData;
  }, [partIdList]);

  return (
    <div>
      <GroupButtonTabs tabList={formatData()} mtContentDock="20px" />
    </div>
  );
}

export default RecordDetailFullmode;
