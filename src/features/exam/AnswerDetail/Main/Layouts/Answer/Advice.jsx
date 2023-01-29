import { React, useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

function Advice({ explain }) {
  const [showAdvice, setShowAdvice] = useState(false);

  return (
    <div className="mt-10 flex flex-col justify-between items-start">
      <div
        className="flex flex-row gap-2 justify-between items-center cursor-pointer select-none"
        onClick={() => setShowAdvice(!showAdvice)}
      >
        <p className="text-ac_blue text-lg">Từ vựng và ngữ pháp cần nắm</p>
        {!showAdvice && <IoIosArrowForward fill="#2860E1" />}
        {showAdvice && <IoIosArrowDown fill="#2860E1" />}
      </div>
      {showAdvice && <div className="ml-8 mt-2" dangerouslySetInnerHTML={{ __html: explain }} />}
    </div>
  );
}

export default Advice;
