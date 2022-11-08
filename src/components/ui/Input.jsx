import React from 'react';
import classnames from 'classnames';
import { useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import PropTypes from 'prop-types';

/* Props
- type: specify input type
- size: button size
    - normal
    - large
- status: status of this input (you should use state here)
    - error
    - warning
- outlined: whether input is outlined instead of filled
- disabled: whether input is disabled
- width: specify width
- height: specify height
- leftIcon: specify left icon
- rightIcon: specify right icon. This prop conflict with leftIcon and visibilityToggle
- rounded: border radius of input
- value: value of input. You must use state here
- onChange: callback when user input
- visibilityToggle: whether to display Show/Hide password toggle (prop type must be 'password'). This one conflict with rightIcon
- onBlur: callback when blur input 
- onFocus: callback when focus input
*/

const Input = ({
  type = 'text',
  size = 'normal',
  status,
  outlined,
  disabled,
  width,
  height,
  leftIcon,
  rightIcon,
  rounded = [],
  value,
  onChange,
  visibilityToggle,
  onBlur,
  onFocus,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentType, setCurrentType] = useState(type);
  const ref = useRef();

  const handleWrapperClick = () => {
    ref.current.focus();
  };

  return (
    // Wrapper
    <div
      className={classnames(
        'flex items-center gap-2 px-4 h-11 text-md bg-bg_light_gray_2 rounded-lg focus-within:outline outline-2 outline-ac_blue w-fit',

        // Size
        size === 'large' && 'h-12 text-lg',

        // Status
        !disabled && {
          'border-[2px] border-ac_red': status === 'error',
          'border-[2px] border-ac_yellow': status === 'warning',
        },

        // Appearance
        outlined && 'bg-transparent border-br_light_gray border-[1px]',

        // Cursor
        type === 'text' && !disabled && 'cursor-text',

        // Disabled
        disabled && 'bg-bg_gray_2 border-br_light_gray border-[1px]',
      )}
      style={{
        width: width,
        height: height,
        borderTopLeftRadius: rounded[0],
        borderTopRightRadius: rounded[1],
        borderBottomRightRadius: rounded[2],
        borderBottomLeftRadius: rounded[3],
      }}
      onClick={handleWrapperClick}
    >
      {leftIcon && <div>{leftIcon}</div>}

      {/* Real input */}
      <input
        className="outline-none bg-transparent text-t_dark flex-1"
        ref={ref}
        disabled={disabled}
        value={value}
        type={currentType}
        onChange={onChange ?? undefined}
        onBlur={onBlur ?? undefined}
        onFocus={onFocus ?? undefined}
      />

      {/* Show/Hide password */}
      {visibilityToggle && (
        <button
          onClick={() => {
            setShowPassword(!showPassword);
            setCurrentType(currentType === 'password' ? 'text' : 'password');
          }}
        >
          {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      )}
      {!leftIcon && !visibilityToggle && rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.string,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  rounded: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  value: PropTypes.string,
  onChange: PropTypes.func,
  visibilityToggle: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Input;
