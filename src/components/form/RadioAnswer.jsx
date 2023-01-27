import classnames from 'classnames';

function RadioAnswer({ label, name, value, onChange = () => {}, leftDockLabel, mb, isAnswer = null }) {
  return (
    <label
      className={classnames(
        'text-h5 group block relative select-none',
        isAnswer === null && 'cursor-pointer',
        isAnswer === true && 'text-ac_green',
        isAnswer === false && 'text-ac_red',
      )}
      style={{
        paddingLeft: leftDockLabel,
        marginBottom: mb,
      }}
    >
      {label}
      {/* Hide the browser's default checkbox */}
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className="peer absolute opacity-0 cursor-pointer h-0 w-0"
      />
      {/* Create custom checkmark */}
      <span
        className={classnames(
          isAnswer === true && 'bg-ac_green',
          isAnswer === false && 'bg-ac_red',
          isAnswer === null && 'group-hover:bg-[#ccc] peer-checked:border-t_dark peer-checked:bg-t_dark bg-transparent',
          'rounded-full absolute top-[2px] left-0 w-4 h-4 border border-solid border-t_light_gray_3 ',
        )}
      />
    </label>
  );
}

export default RadioAnswer;
