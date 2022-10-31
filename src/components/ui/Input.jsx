import React from 'react';
import classnames from 'classnames';
import { useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

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
  rounded,
  value,
  onChange,
  visibilityToggle,
  onBlur,
  onFocus,
}) => {
  let checkRounded;
  // Check validity of rounded
  if (rounded === undefined) {
    checkRounded = [];
  } else {
    checkRounded = [...rounded, ...Array(4 - rounded.length).fill(0)];
  }

  const [showPassword, setShowPassword] = useState(false);
  const [currentType, setCurrentType] = useState(type);
  const ref = useRef();

  const handleWrapperClick = () => {
    ref.current.focus();
  };

  return (
    <div
      className={classnames(
        'flex items-center gap-2 px-4 h-11 text-md bg-bg_light_gray_2 rounded-lg focus-within:outline outline-2 outline-ac_blue',

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
        borderTopLeftRadius: checkRounded[0],
        borderTopRightRadius: checkRounded[1],
        borderBottomRightRadius: checkRounded[2],
        borderBottomLeftRadius: checkRounded[3],
      }}
      onClick={handleWrapperClick}
    >
      {leftIcon && <div>{leftIcon}</div>}
      <input
        ref={ref}
        disabled={disabled}
        value={value}
        className="outline-none bg-transparent text-t_dark"
        type={currentType}
        onChange={onChange ?? undefined}
        onBlur={onBlur ?? undefined}
        onFocus={onFocus ?? onFocus}
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

// Input.PropType

export default Input;
