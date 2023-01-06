import GroupButtonTabs from '../../components/GroupButtonTabs/GroupButtonTabs';
import { groupButtons } from '../../data';
import Table from './Table';

const newObject = {
  title: 'Tất cả',
  partAnswerList: [],
};

groupButtons.forEach((currentValue) => {
  newObject.partAnswerList = newObject.partAnswerList.concat(currentValue.partAnswerList);
});

// Add newObject to data
groupButtons.push(newObject);

// Add element property to data
groupButtons.forEach((item) => {
  item.element = <Table data={item.partAnswerList} />;
});

function RecordDetailIndex() {
  return (
    <div>
      <GroupButtonTabs tabList={groupButtons} mtContentDock="20px" />
    </div>
  );
}

export default RecordDetailIndex;
