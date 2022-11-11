import { memo } from 'react';

function AchieveList({ achieveList }) {
  return (
    <>
      <h3 className="text-body-lg text-center font-medium lg:text-left">Bạn nhận được gì sau khóa học?</h3>
      <div className="grid gap-3 mt-4 md:grid-cols-2 lg:gap-4 lg:mt-8">
        {/* List achieve */}
        {achieveList?.map((achieve, index) => (
          <div key={achieve.id} className="flex items-center gap-4">
            <div className="w-[30px] h-[30px] bg-primary flex flex-shrink-0 justify-center rounded-md items-center">
              <span className="text-white">{index + 1}</span>
            </div>
            <p>{achieve.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(AchieveList);
