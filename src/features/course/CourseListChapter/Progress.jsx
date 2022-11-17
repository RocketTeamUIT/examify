import classNames from 'classnames';

function Progress({ progress }) {
  return (
    <div
      className={classNames('w-[40px] h-[40px] rounded-full border-2 flex', {
        // Completed
        'border-ac_green': progress === 100,
        // inProgress
        'border-ac_blue': progress > 0 && progress < 100,
        // inCompleted:
        'border-gray-400': progress === 0,
      })}
    >
      <span
        className={classNames('text-[12px] font-semibold m-auto', {
          // Completed
          'text-ac_green': progress === 100,
          // inProgress
          'text-ac_blue': progress > 0 && progress < 100,
          // inCompleted:
          'text-gray-400': progress === 0,
        })}
      >
        {progress}%
      </span>
    </div>
  );
}

export default Progress;
