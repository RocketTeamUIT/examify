import GroupQuestion from './GroupQuestion';

function ControlBar({ partList = [] }) {
  return (
    <div className="p-3 max-h-[calc(100vh_-_100px)] overflow-y-scroll bg-white hidden basis-0 md:block md:basis-[32%] lg:basis-1/4 xl:basis-1/5 rounded-lg sticky top-20">
      <div className="flex flex-col gap-y-6">
        {partList.map(({ title, data, id }, index) => (
          <GroupQuestion key={index} title={title} groupId={data} partId={id} />
        ))}
      </div>
    </div>
  );
}

export default ControlBar;
