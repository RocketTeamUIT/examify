import classNames from 'classnames';

/*
  status: `normal` || `wrong` || `correct`

*/

function Radio({
  label,
  name = '',
  value = '',
  onChange = () => {},
  leftDockLabel,
  mb,
  disabled = false,
  checked = false,
  status = 'normal',
}) {
  return (
    <label
      className={classNames('text-h5 group block relative select-none cursor-pointer', {
        'text-t_light_gray_2 pointer-events-none': disabled,
      })}
      style={{
        paddingLeft: leftDockLabel,
        marginBottom: mb,
      }}
    >
      <span
        className={classNames('', {
          'bg-ac_green/20': status === 'correct',
          'bg-ac_red/20': status === 'wrong',
        })}
      >
        {label}
      </span>

      {/* Hide the browser's default checkbox */}
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        checked={disabled ? checked : checked ? true : null}
        onChange={onChange}
        className="peer absolute opacity-0 cursor-pointer h-0 w-0"
      />

      {/* Create custom checkmark */}
      <span
        className={classNames(
          'group-hover:bg-[#ccc] peer-checked:border-t_dark peer-checked:bg-t_dark rounded-full absolute top-[2px] left-0 w-4 h-4 border border-solid border-t_light_gray_3 bg-transparent',
          {
            'peer-checked:!bg-t_light_gray_2 peer-checked:!border-t_light_gray_2': disabled,
          },
        )}
      ></span>
    </label>
  );
}

export default Radio;
