import React from 'react';
import { BsVolumeDown } from 'react-icons/bs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const FlashcardSingle = () => {
  return (
    <li className="bg-white rounded-lg shadow-sd_large p-5 grid grid-cols-12 gap-x-5">
      <header className="col-span-full flex items-center justify-between">
        <h4 className="text-h4 font-bold">
          ACQUIRE <span className="font-normal">(v)</span>
        </h4>
        <button className="p-2 rounded-full -mr-2 hover:bg-bg_light_gray_5 transition">
          <HiOutlineDotsHorizontal className="h-5 w-5" />
        </button>
      </header>

      <div className="flex items-center gap-4 col-span-full mb-2 mt-0.5">
        <p className="font-medium text-md text-t_dark">/əˈkwaɪə/</p>
        <button className="w-7 h-7 rounded-full bg-ac_orange flex items-center justify-center bg-opacity-20">
          <BsVolumeDown className="w-6 h-6 text-ac_dark_blue" />
        </button>
      </div>

      <div className="col-span-8">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, turpis nec gravida pulvinar, lectus
          dui pulvinar risus, quis molestie augue quam a
        </p>

        <div className="mt-[14px]">
          <b className="italic font-semibold text-md mb-1">Ví dụ</b>
          <ul className="list-disc text-md ml-6">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
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
    </li>
  );
};

export default FlashcardSingle;
