import classNames from 'classnames';

function QuestionCircle({ children: numberOrder, type = 'solid' }) {
  return (
    <button
      className={classNames('w-8 h-8 bg-white ring-1 flex justify-center items-center rounded-full', {
        'ring-ac_green': type === 'success',
        'hover:bg-[#34c63533]': type === 'success',
        'ring-ac_red': type === 'wrong',
        'hover:bg-[#EF373733]': type === 'wrong',
        'ring-bg_light_gray': type === 'solid',
        'bg-bg_light_gray': type === 'solid',
      })}
    >
      <span
        className={classNames('font-normal text-sm', {
          'text-ac_green': type === 'success',
          'text-ac_red': type === 'wrong',
          'text-primary': type === 'solid',
          '!font-bold': type === 'solid',
        })}
      >
        {numberOrder}
      </span>
    </button>
  );
}

export default QuestionCircle;
