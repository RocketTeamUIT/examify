import classnames from 'classnames';

function RadioAnswer({ id, label, name, value, onChange = () => {}, leftDockLabel, mb, isAnswer, choicedId }) {
  const isChoiced = id === choicedId ? true : false;
  const isIncorrect = id === choicedId && !isAnswer ? true : false;
  return (
    <label
      className={classnames(
        'text-h5 group block relative select-none',
        isChoiced && 'font-semibold',
        isAnswer && 'text-ac_green ',
        isIncorrect && 'text-ac_red',
      )}
      style={{
        paddingLeft: leftDockLabel,
        marginBottom: mb,
      }}
    >
      {label}
      {/* Hide the browser's default checkbox */}
      <input type="radio" name={name} value={value} onChange={onChange} className="absolute opacity-0 h-0 w-0" />
      {/* Create custom checkmark */}
      <span
        className={classnames(
          isChoiced && '',
          isAnswer && 'border-ac_green',
          isIncorrect && 'border-ac_red',
          'bg-transparent rounded-full absolute top-[2px] left-0 w-4 h-4 border border-solid border-t_light_gray_3 ',
        )}
      />
      {isChoiced && (
        <span
          className={classnames(
            isAnswer && 'bg-ac_green',
            isIncorrect && 'bg-ac_red',
            'bg-transparent rounded-full absolute top-[6px] left-1 w-2 h-2 ',
          )}
        />
      )}
    </label>
  );
}

export default RadioAnswer;
