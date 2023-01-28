import classNames from 'classnames';
import { Tag } from 'components/ui';
import React from 'react';
import { AiOutlineSound } from 'react-icons/ai';

const FlashcardSinglePractice = ({ newWord, flashcard, flip, setFlip }) => {
  const handleClick = () => {
    setFlip((flip) => !flip);
  };

  function play() {
    new Audio(flashcard.audio || '').play();
  }

  return (
    <div
      className="bg-white rounded-lg shadow-sd_large relative cursor-pointer min-h-[300px] flex items-center justify-center transition-transform duration-700"
      onClick={handleClick}
      style={{
        transformStyle: 'preserve-3d',
        transform: flip && 'rotateY(180deg)',
      }}
    >
      {/* Front side */}
      <div
        className="flex flex-col justify-center items-center absolute p-5 cursor-default j-"
        style={{
          backfaceVisibility: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-bold text-h2 uppercase">{flashcard.word}</p>
        <div className="mt-5 flex items-center gap-3">
          <span className="font-medium text-md">{flashcard.pronouncec}</span>
          <button className="p-1 rounded-full bg-ac_orange bg-opacity-20" onClick={play}>
            <AiOutlineSound size="20px" />
          </button>
        </div>
      </div>

      {/* Back side */}
      <div
        className="h-full w-full items-start absolute p-5"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <div className="grid grid-cols-12 gap-4">
          <h5 className="col-span-12 text-h5 font-bold">Nghĩa</h5>
          <div className={classNames(flashcard.image ? 'col-span-8' : 'col-span-full')}>
            <p className="text-lg">{flashcard.meaning}</p>

            {flashcard.example && (
              <div className="mt-[14px]">
                <b className="italic font-semibold text-md mb-1">Ví dụ</b>
                <p className="text-md">{flashcard.example}</p>
              </div>
            )}

            {flashcard.note && (
              <div className="mt-2">
                <b className="italic font-semibold text-md mb-1">Ghi chú</b>
                <p className="text-md">{flashcard.note}</p>
              </div>
            )}
          </div>

          {flashcard.image && (
            <aside className="col-span-4 rounded-lg border border-br_gray overflow-hidden aspect-[5/4]">
              <img src={flashcard.image} alt="Bocchi the rock" className="w-full h-full object-cover" />
            </aside>
          )}
        </div>
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
