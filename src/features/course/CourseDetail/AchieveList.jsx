import { memo } from 'react';

function AchieveList({ achieve }) {
  return (
    <>
      <h3 className="text-body-lg text-center font-medium lg:text-left">Bạn nhận được gì sau khóa học?</h3>
      <div className="mt-4 lg:mt-8">
        {/* List achieve */}
        <div className="flex items-center gap-4">
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
