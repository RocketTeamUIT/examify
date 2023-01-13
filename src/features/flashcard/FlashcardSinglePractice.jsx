import classNames from 'classnames';
import { Tag } from 'components/ui';
import React, { useState } from 'react';
import { AiOutlineSound } from 'react-icons/ai';

const FlashcardSinglePractice = ({ newWord }) => {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip((flip) => !flip);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sd_large relative cursor-pointer min-h-[340px] flex items-center justify-center transition-transform duration-700"
      onClick={handleClick}
      style={{
        transformStyle: 'preserve-3d',
        transform: flip && 'rotateY(180deg)',
      }}
    >
      {/* Front side */}
      <div
        className="flex flex-col justify-center items-center absolute p-5 cursor-default"
        style={{
          backfaceVisibility: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-bold text-h2">ACQUIRE</p>
        <div className="mt-5 flex items-center gap-3">
          <span className="font-medium text-md">/əˈkwaɪə/</span>
          <button className="p-1 rounded-full bg-ac_orange bg-opacity-20">
            <AiOutlineSound size="20px" />
          </button>
        </div>
      </div>

      {/* Back side */}
      <div
        className="grid grid-cols-12 absolute p-5 gap-4"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <div className="col-span-8">
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, turpis nec gravida pulvinar, lectus
            dui pulvinar risus, quis molestie augue quam a
          </p>

          <div className="mt-[14px]">
            <b className="italic font-semibold text-md mb-1">Ví dụ</b>
            <ul className="list-disc text-md ml-6">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <b className="italic font-semibold text-md mb-1">Ghi chú</b>
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </p>
          </div>
        </div>

        <aside className="col-span-4 rounded-lg border border-br_gray overflow-hidden aspect-[5/4]">
          <img
            src="https://i.ytimg.com/vi/X2oeNmslUck/maxresdefault.jpg"
            alt="Bocchi the rock"
            className="w-full h-full object-cover"
          />
        </aside>
      </div>

      {newWord && (
        <div className="absolute left-5 top-0 -translate-y-1/2 rounded-full bg-white transition">
          <Tag color="green" width="w-[91px]">
            <span
              className="text-md transition-transform duration-700"
              style={{
                transform: flip && 'rotateY(180deg)',
              }}
            >
              Từ mới
            </span>
          </Tag>
        </div>
      )}
    </div>
  );
};

export default FlashcardSinglePractice;
