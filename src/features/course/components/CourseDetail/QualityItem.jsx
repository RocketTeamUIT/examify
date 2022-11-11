import { memo } from 'react';

// Declare QualityItem component:
function QualityItem({ children, icon }) {
  return (
    <div className="border-2 border-primary rounded-lg pb-3 pt-6 px-5 relative flex items-center">
      <p>{children}</p>
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white">
        <div className="relative w-[40px] h-[40px] before:block before:w-[40px] before:h-[40px] before:rounded-full before:bg-primary before:opacity-50">
          <div className="text-primary text-[24px] absolute bottom-0 -translate-y-1/3  right-0 -translate-x-1/3">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(QualityItem);
