import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';

/* Props
- type: specify input type
- size: button size
    - normal
    - large
- status: status of this input (you should use state here). This change border color
    - error
    - warning
- outlined: whether input is outlined instead of filled
- fancyOutlined: whether input is a material outlined input (has a label instead of placeholder) 
- fancyBackgroundColor: specify background color of above label (because the label's background color is not transparent)
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
- name: represents an input value
*/

const Input = forwardRef(
  (
    {
      type = 'text',
      size = 'normal',
      status,
      fancyOutlined,
      fancyBackgroundColor = '#fff',
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
      name,
      placeholder,
      style,
      label,
      alternativeValue,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [currentType, setCurrentType] = useState(type);
    const [stickyLabel, setStickyLabel] = useState(value);
    const inputRef = useRef();

    const handleWrapperClick = () => {
      inputRef.current.focus();
    };

    // Merge inner ref to external ref
    useImperativeHandle(ref, () => inputRef.current);

    const handleChange = (e) => {
      if (onChange) {
        onChange(e);
      }

      // Non-empty input
      if (e.target.value && !stickyLabel) {
        setStickyLabel(true);
      }

      // Empty input
      if (!e.target.value && stickyLabel) {
        setStickyLabel(false);
      }
    };

    useEffect(() => {
      if ((value || alternativeValue) && !stickyLabel) {
        setStickyLabel(true);
      }
      if (!value && !alternativeValue && stickyLabel && !inputRef.current?.value) {
        setStickyLabel(false);
      }
    }, [value, alternativeValue, stickyLabel]);

    return (
      // Container
      <div
        data-testid="wrapper"
        className={classnames(
          'flex items-center gap-2 px-4 h-11 text-md rounded-lg focus-within:outline focus-within:outline-2 outline-ac_blue relative',

          // Size
          size === 'large' && 'h-12 text-lg',

          // Status
          !disabled && {
            'outline-1 outline': status,
            'outline-ac_red': status === 'error',
            'outline-ac_yellow': status === 'warning',
          },

          // Appearance
          {
            'bg-bg_light_gray_2': !outlined && !fancyOutlined,
            'bg-transparent border-br_light_gray border-[1px]': outlined || fancyOutlined,
          },

          // Cursor
          type === 'text' && !disabled && 'cursor-text',

          // Disabled
          disabled && 'bg-bg_light_gray_2 border-br_light_gray border-[1px]',
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
          {...props}
          data-testid="test-input"
          className="outline-none bg-transparent flex-1 max-w-full overflow-hidden peer"
          disabled={disabled}
          value={value}
          type={currentType}
          onChange={handleChange}
          onBlur={onBlur ?? undefined}
          onFocus={onFocus ?? undefined}
          name={name ?? undefined}
          ref={inputRef}
          placeholder={fancyOutlined ? undefined : placeholder}
          style={{
            ...style,
            color: disabled ? '#A9A7AC' : '#333333',
          }}
        />

        {/* Show/Hide password */}
        {visibilityToggle && (
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
              setCurrentType(currentType === 'password' ? 'text' : 'password');
            }}
          >
            {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
        {!leftIcon && !visibilityToggle && rightIcon && <div className="flex-shrink-0">{rightIcon}</div>}

        {/* Label */}
        {fancyOutlined && (
          <label
            className="absolute text-t_light_gray_2 px-1 -mx-1 peer-focus:top-0 peer-focus:text-sm top-1/2 -translate-y-1/2 transition-all"
            style={{
              backgroundColor: fancyBackgroundColor,
              top: (stickyLabel || type === 'date') && '0',
              fontSize: (stickyLabel || type === 'date') && '12px',
            }}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.string,
  fancyOutlined: PropTypes.bool,
  fancyBackgroundColor: PropTypes.string,
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
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

Input.displayName = 'Input';

export default Input;
