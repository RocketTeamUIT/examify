import classNames from 'classnames';
import { VIDEOS } from 'data/mock';
import React from 'react';
import { BiLockAlt } from 'react-icons/bi';

export default function Tracker({ focus, setFocus }) {
  return (
    <>
      <div className="bg-primary h-[72px] shadow-sd_small flex items-center justify-between">
        <h2 className="text-h4 font-semibold p-6 text-white">Nhập môn anh văn siêu cấp 1</h2>
      </div>

      <div
        className="border-b-2 border-x-2 border-t_light_gray rounded-b-[4px] overflow-auto h-[calc(100vh-132px)]"
        id="course-track-body"
      >
        {VIDEOS.map((video, index) => (
          <div
            key={index}
            className={classNames(
              'h-[60px] px-5 text-t_dark flex items-center transition relative',
              focus === index && 'bg-[#E7E5EA] font-bold',
              VIDEOS[index].unlocked && 'cursor-pointer hover:bg-[#E7E5EA]',
            )}
            onClick={() => {
              if (VIDEOS[index].unlocked) {
                setFocus(index);
              }
            }}
          >
            Bài {index + 1}. {video.title}
            {!video.unlocked && <BiLockAlt size="20px" className="ml-auto" />}
          </div>
        ))}

        <div className="text-sm mx-auto mt-6 mb-10 text-white justify-center flex">
          <div
            className="flex items-center justify-center h-[80px] w-[80px] rounded-full relative progress-wrapper"
            style={{
              '--border-color': '#208AFF',
              '--degree': '240deg',
            }}
          >
            <span className="text-[1.125rem] font-semibold w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center text-ac_lighter_blue">
              67%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
