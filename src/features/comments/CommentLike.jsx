import classNames from 'classnames';
import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import isEmptyObject from '../../utils/isEmptyObject';

const CommentLike = ({ total, liked, handleClick, disabled }) => {
  const { user } = useSelector((store) => store.auth);

  return (
    <button
      className={classNames(
        'h-[20px] flex items-center justify-between gap-1 rounded bg-bg_light_gray border w-fit p-0.5',
        liked ? 'border-primary' : 'border-br_gray',
      )}
      disabled={isEmptyObject(user) || disabled}
      onClick={handleClick}
    >
      <AiOutlineLike className={classNames(liked ? 'text-primary' : 'text-t_gray', 'h-3 w-[13px]')} />
      <span className={classNames('font-bold text-sm', liked ? 'text-primary' : 'text-t_gray')}>{total}</span>
    </button>
  );
};

export default CommentLike;
