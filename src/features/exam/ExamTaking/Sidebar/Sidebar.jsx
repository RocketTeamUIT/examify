import GroupQuestion from './GroupQuestion';
import { partList } from 'features/exam/data';

function Sidebar() {
  return (
    <div className="p-3 bg-white hidden basis-0 md:block md:basis-[32%] lg:basis-1/4 xl:basis-1/5 rounded-lg">
      <div className="flex flex-col gap-y-6">
        {partList.map(({ name, questionList }, index) => (
          <GroupQuestion key={index} name={name} questionList={questionList} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
