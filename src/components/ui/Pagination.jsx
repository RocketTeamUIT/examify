import classNames from 'classnames';
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';

const Pagination = ({ length, selected, setSelected }) => {
  const handleMove = (value) => {
    if (selected + value < length && selected + value >= 0) setSelected(selected + value);
  };

  const hide = (index) => {
    if (length <= 5) return false;
    if (index >= selected - 2 && index <= selected + 2) return false;
    return true;
  };

  if (length === 0) return null;

  return (
    <div className="w-fit flex gap-[10px]">
      {/* Move previous */}
      {selected !== 0 && (
        <button
          className="hover:bg-opacity-30 transition w-9 h-8 rounded-md flex bg-primary bg-opacity-10 text-black items-center justify-center font-bold"
          onClick={() => handleMove(-1)}
          data-testid="move-prev"
        >
          <BsChevronLeft />
        </button>
      )}

      {/* Show first page and ... */}
      {hide(0) && (
        <>
          <button
            onClick={() => setSelected(0)}
            className={classNames(
              'bg-opacity-10 text-primary hover:bg-opacity-30 transition w-9 h-8 rounded-md bg-primary items-center justify-center font-bold text-md flex',
            )}
            data-testid="very-first"
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
              data-testid={`button-${index + 1}`}
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
            data-testid="very-end"
          >
            {length}
          </button>
        </>
      )}

      {/* Move next */}
      {selected !== length - 1 && (
        <button
          className="hover:bg-opacity-30 transition w-9 h-8 rounded-md flex bg-primary bg-opacity-10 text-black items-center justify-center font-bold"
          onClick={() => handleMove(1)}
          data-testid="move-next"
        >
          <BsChevronRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
