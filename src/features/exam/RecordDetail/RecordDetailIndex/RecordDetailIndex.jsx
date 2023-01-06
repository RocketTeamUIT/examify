import GroupButtonTabs from '../../components/GroupButtonTabs/GroupButtonTabs';
import { groupButtons } from '../../data';
import Table from './Table';

const newData = groupButtons.map((item) => {
  return { ...item };
});

const newObject = {
  title: 'Tất cả',
  partAnswerList: [],
};

newData.forEach((currentValue) => {
  newObject.partAnswerList = newObject.partAnswerList.concat(currentValue.partAnswerList);
});

// Add newObject to data
newData.push(newObject);

// Add element property to data
newData.forEach((item) => {
  item.element = <Table data={item.partAnswerList} />;
});

function RecordDetailIndex() {
  return (
    <div>
      <GroupButtonTabs tabList={newData} mtContentDock="20px" />
    </div>
  );
}

export default RecordDetailIndex;
