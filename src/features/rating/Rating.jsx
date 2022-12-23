import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Rating = ({ rating, onRating = () => {}, width = 'w-11', height = 'h-11' }) => {
  const [hoverStar, setHoverStar] = useState(0);

  const onHover = (index) => {
    setHoverStar(index);
  };

  const getStar = useCallback(
    (index) => {
      let Star;
      if (hoverStar >= index || (!hoverStar && rating >= index)) Star = AiFillStar;
      else Star = AiOutlineStar;

      return (
        <Star
          onMouseEnter={() => onHover(index)}
          onMouseLeave={() => onHover(0)}
          onClick={() => onRating(index)}
          key={index}
          className={classNames('cursor-pointer text-yellow-400 p-1', width, height)}
        />
      );
    },
    [rating, onRating, hoverStar, width, height],
  );

  const stars = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => getStar(idx));
  }, [getStar]);

  return <div className="flex items-center justify-center">{stars}</div>;
};

export default Rating;
