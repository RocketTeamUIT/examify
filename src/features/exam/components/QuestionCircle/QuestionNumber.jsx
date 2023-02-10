import classNames from 'classnames';
import { forwardRef } from 'react';

function QuestionNumber({ children: numberOrder, type = 'solid', onClick = () => {} }, ref) {
  return (
    <>
      <button
        ref={ref}
        onClick={onClick}
        className={classNames('w-8 h-8 bg-white ring-1 flex justify-center items-center rounded-full', {
          'ring-ac_green': type === 'correct',
          'hover:bg-ac_green/20': type === 'correct',
          'ring-ac_red': type === 'wrong',
          'hover:bg-ac_red/20': type === 'wrong',
          'ring-t_light_gray_2': type === 'skip',
          'hover:bg-t_light_gray_2/20': type === 'skip',
          'ring-ac_blue/20': type === 'solid',
          'bg-ac_blue/20': type === 'solid',
        })}
      >
        <span
          className={classNames('font-normal text-sm', {
            'text-ac_green': type === 'correct',
            'text-ac_red': type === 'wrong',
            'text-t_light_gray_2': type === 'skip',
            'text-primary': type === 'solid',
            '!font-bold': type === 'solid',
          })}
        >
          {numberOrder}
        </span>
      </button>
    </>
  );
}

export default forwardRef(QuestionNumber);
