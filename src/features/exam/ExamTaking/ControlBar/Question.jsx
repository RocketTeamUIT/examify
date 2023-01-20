import classNames from 'classnames';

function Question({ seq, type = 'unfill', flag = true }) {
  return (
    <div
      className={classNames(
        'w-8 h-7 rounded ring-[0.8px] flex items-center justify-center cursor-pointer hover:ring-[1.2px] relative hover:underline',
        {
          'bg-white ring-black text-t_dark hover:bg-ac_blue hover:ring-ac_blue hover:text-t_white': type === 'unfill',
          'bg-ac_blue/20 ring-ac_blue text-ac_blue': type === 'fill',
          'bg-ac_red/20 ring-ac_red text-ac_red': type === 'wrong',
          'bg-ac_green/20 ring-ac_green text-ac_green': type === 'correct',
        },
        {
          "before:content-[''] before:absolute before:-top-[0.8px] before:-right-[0.8px] before:border-t-8 before:border-r-8 before:border-t-ac_red before:border-r-transparent before:w-0 before:rotate-90 before:rounded":
            flag === true,
        },
      )}
    >
      <span className="font-normal text-h6 select-none">{seq}</span>
    </div>
  );
}

export default Question;
