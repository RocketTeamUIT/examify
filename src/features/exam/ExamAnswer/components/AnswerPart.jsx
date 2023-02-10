import React from 'react';
import classnames from 'classnames';
import ProgressBar from './ProgressBar';

function AnswerPart({ type, score }) {
  return (
    <div
      className={classnames(
        'w-80 h-36 rounded-lg relative flex flex-col justify-center items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] group',
        type === 'listening' ? 'bg-[#99FF9D]/[0.41]' : 'bg-[#FF9513]/[0.33]',
      )}
    >
      {/* Title */}
      <div
        className={classnames(
          'absolute top-0 w-[95px] text-[11px] py-1 font-semibold font-serif text-white flex flex-col justify-center items-center rounded-sm',
          type === 'listening' ? 'bg-[#187321]' : 'bg-[#B74809] ',
        )}
      >
        {type === 'listening' ? 'LISTENING' : 'READING'}
      </div>

      {/* Progress bar */}
      <div className="px-10 w-full mt-8">
        <ProgressBar score={score} type={type} />
        <div className="flex justify-between w-full mt-2 font-serif font-semibold text-[9px]">
          <span>5</span>
          <span>450</span>
        </div>
      </div>

      {/* Button */}
      <div className="absolute bottom-0 items-end px-6 bg-white rounded-t-md pt-3 shadow-[0_-4px_8px_0_rgba(0,0,0,0.25)] group-hover:block hidden ">
        <div className="flex gap-7">
          <button className="px-2 py-1 bg-black font-semibold text-[9px] text-white rounded-sm">LÀM LẠI</button>
          <button className="px-2 py-1 bg-black font-semibold text-[9px] text-white rounded-sm">XEM LẠI</button>
        </div>
      </div>
    </div>
  );
}

export default AnswerPart;
