import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';

const Pagination = ({ length }) => {
  const [selected, setSelected] = useState(0);

  const handleMove = (value) => {
    if (selected + value < length && selected + value >= 0) setSelected(selected + value);
  };

  const hide = (index) => {
    if (index >= selected - 2 && index <= selected + 2) return false;
    return true;
  };

  return (
    <div className="w-fit flex gap-[10px]">
      {/* Move previous */}
      <button
        className="hover:bg-opacity-30 transition w-9 h-8 rounded-md flex bg-primary bg-opacity-10 text-black items-center justify-center font-bold"
        onClick={() => handleMove(-1)}
      >
        <BsChevronLeft />
      </button>

      {/* Show first page and ... */}
      {hide(0) && (
        <>
          <button
            onClick={() => setSelected(0)}
            className={classNames(
              'bg-opacity-10 text-primary hover:bg-opacity-30 transition w-9 h-8 rounded-md bg-primary items-center justify-center font-bold text-md flex',
            )}
          >
            1
          </button>

          <HiDotsHorizontal className="m-auto" />
        </>
      )}

      {/* Page */}
      {Array(length)
        .fill()
        .map((_, index) => {
          return (
            <button
              onClick={() => setSelected(index)}
              key={index}
              className={classNames(
                'w-9 h-8 rounded-md flex bg-primary items-center justify-center font-bold text-md',
                index === selected ? 'text-white' : 'bg-opacity-10 text-primary hover:bg-opacity-30 transition',
                hide(index) && 'hidden',
              )}
            >
              {index + 1}
            </button>
          );
        })}

      {/* Show ... and last page */}
      {hide(length - 1) && (
        <>
          <HiDotsHorizontal className="m-auto" />

          <button
            onClick={() => setSelected(length - 1)}
            className={classNames(
              'bg-opacity-10 text-primary hover:bg-opacity-30 transition w-9 h-8 rounded-md bg-primary items-center justify-center font-bold text-md flex',
            )}
          >
            {length}
          </button>
        </>
      )}

      {/* Move next */}
      <button
        className="hover:bg-opacity-30 transition w-9 h-8 rounded-md flex bg-primary bg-opacity-10 text-black items-center justify-center font-bold"
        onClick={() => handleMove(1)}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
