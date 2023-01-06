import AnswerListing from './AnswerListing/AnswerListing';
import { dataListing } from '../../data';
import { groupButtons } from '../../data';
import GroupButtonTabs from '../../components/GroupButtonTabs/GroupButtonTabs';

const newData = groupButtons.map((item) => {
  return { ...item };
});

const newObject = {
  title: 'Tất cả',
};

// Add newObject to data
newData.push(newObject);

// Add element property to data
newData.forEach((item) => {
  item.element = <AnswerListing data={dataListing} />;
});

function RecordDetailFullmode() {
  return (
    <div>
      <GroupButtonTabs tabList={newData} mtContentDock="20px" />
    </div>
  );
}

export default RecordDetailFullmode;
