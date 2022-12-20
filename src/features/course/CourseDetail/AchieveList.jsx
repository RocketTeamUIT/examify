import { memo } from 'react';

function AchieveList({ achieve }) {
  return (
    <>
      <h3 className="text-body-lg text-center font-medium lg:text-left">Bạn nhận được gì sau khóa học?</h3>
      <div className="grid gap-3 mt-4 md:grid-cols-2 lg:gap-4 lg:mt-8">
        {/* List achieve */}
        <div className="flex items-center gap-4">
          <div className="w-[30px] h-[30px] bg-primary flex flex-shrink-0 justify-center rounded-md items-center">
            <span className="text-white">{1}</span>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: achieve,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default memo(AchieveList);
