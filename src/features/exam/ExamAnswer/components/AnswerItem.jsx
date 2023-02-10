import React from 'react';
import AnswerPart from './AnswerPart';

function AnswerItem({ day, data }) {
  return (
    <div className="mb-20">
      <div className="w-[111px] h-10 bg-gradient-to-r from-[#5AB0B6] to-[#2193B0] border rounded-md flex items-center justify-center">
        <p className="text-t_white font-bold text-h6">DAY {day + 1}</p>
      </div>
      <div className="flex justify-between items-center justify-items-stretch">
        <div className="flex flex-col gap-y-5">
          <p className="font-semibold text-t_dark text-h4">Bộ đề thi: {data.name}</p>
          <p className="font-semibold text-t_dark">
            Ngày làm: <span className="font-normal">{data.date_take}</span>
          </p>
          <p className="font-semibold text-t_dark">
            Thời gian làm bài: <span className="font-normal">{data.date_take}</span>
          </p>
        </div>
        <AnswerPart type="listening" score={data.listening} />
        <AnswerPart type="reading" score={data.reading} />
        <div className="flex flex-col items-center gap-5">
          <div className="border-2 border-black rounded-md py-3 px-8 text-h4 font-bold font-serif">SCORE</div>
          <div className="h-[76px] w-[76px] flex items-center justify-center rounded-full bg-black text-t_white font-bold font-serif">
            {Number(data.reading) + Number(data.listening)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerItem;
