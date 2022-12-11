import React from 'react';
import classnames from 'classnames';
import { useRef } from 'react';
import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactTextareaAutosize from 'react-textarea-autosize';

/* Props
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

- rounded: border radius of input
- value: value of input. You must use state here
- onChange: callback when user input
- onBlur: callback when blur input 
- onFocus: callback when focus input
- name: represents an input value
*/

const TextArea = forwardRef(
  (
    {
      status,
      fancyOutlined,
      fancyBackgroundColor = '#fff',
      outlined,
      disabled,
      width,
      height,
      rounded = [],
      value,
      onChange,
      onBlur,
      onFocus,
      name,
      placeholder,
      style,
      label,
    },
    ref,
  ) => {
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

    return (
      // Container
      <div
        className={classnames(
          'flex items-center gap-2 p-4 text-lg rounded-lg focus-within:outline focus-within:outline-2 outline-ac_blue relative',

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
        {/* Real input */}
        <ReactTextareaAutosize
          minRows={4}
          className="outline-none bg-transparent text-t_dark flex-1 max-w-full overflow-hidden peer resize-none"
          disabled={disabled}
          value={value}
          onChange={handleChange}
          onBlur={onBlur ?? undefined}
          onFocus={onFocus ?? undefined}
          name={name ?? undefined}
          ref={inputRef}
          placeholder={fancyOutlined ? undefined : placeholder}
          style={{
            ...style,
          }}
        />

        {/* Label */}
        {fancyOutlined && (
          <label
            className="absolute px-1 -mx-1 peer-focus:top-0 peer-focus:text-sm top-1/2 -translate-y-1/2 transition-all"
            style={{
              backgroundColor: fancyBackgroundColor,
              top: stickyLabel && '0',
              fontSize: stickyLabel && '12px',
            }}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

TextArea.propTypes = {
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

export default TextArea;
