import React, { useEffect } from 'react';
import Input from './Input';
import { useSpring, animated } from 'react-spring';
import { useRef } from 'react';
import PropTypes from 'prop-types';

/* Props
- children: implement your recommendation list here
- size: input size
    - normal
    - large
- status: status of this input (you should use state here)
    - error
    - warning
- outlined: whether input is outlined instead of filled
- disabled: whether input is disabled
- width: specify width
- height: specify height
- maxWidth: specify maxWidth
- leftIcon: specify left icon
- rightIcon: specify right icon. This prop conflict with leftIcon and visibilityToggle
- rounded: border radius of input
- value: value of input. You must use state here
- onChange: callback when user input
- placeholder: specify placeholder
*/

const AutoComplete = ({
  children,
  size,
  status,
  outlined,
  disabled,
  width,
  height,
  maxWidth,
  leftIcon,
  rightIcon,
  rounded,
  value,
  onChange,
  placeholder,
}) => {
  const config = { tension: 300, friction: 15, clamp: false };
  const initialStyles = {
    opacity: 0,
    pointerEvents: 'none',
    top: '20px',
  };
  const [props, setSpring] = useSpring(() => initialStyles);
  const popoverRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {}, []);

  // Handle hide/show popover and animate it using react-spring
  const showPopover = () => {
    setSpring.start({
      opacity: 1,
      pointerEvents: 'auto',
      top: wrapperRef.current.offsetHeight + 8 + 'px',
      config,
    });
  };

  const hidePopover = () => {
    setSpring.start({
      ...initialStyles,
      config: { ...config, clamp: true },
    });
  };

  // Hide popover when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popoverRef.current &&
        wrapperRef.current &&
        !popoverRef.current.contains(e.target) &&
        !wrapperRef.current.contains(e.target)
      ) {
        hidePopover();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [popoverRef]);

  return (
    <div
      className="w-fit relative"
      style={{
        width,
        maxWidth,
      }}
    >
      <div
        className="w-fit"
        style={{
          width,
        }}
        ref={wrapperRef}
      >
        <Input
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type="text"
          status={status}
          outlined={outlined}
          disabled={disabled}
          size={size}
          width={width}
          height={height}
          rounded={rounded}
          onFocus={showPopover}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>

      <animated.div
        ref={popoverRef}
        style={props}
        data-testid="list"
        className="bg-white p-4 rounded-lg absolute w-full shadow-sd_medium text-t_dark"
      >
        {children}
      </animated.div>
    </div>
  );
};

AutoComplete.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  status: PropTypes.string,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  maxWidth: PropTypes.string,
  rounded: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  placeholder: PropTypes.string,
};

export default AutoComplete;
