import React, { useEffect } from 'react';
import Input from './Input';
import { useSpring, animated } from 'react-spring';
import { useRef } from 'react';

const AutoComplete = ({
  value,
  onChange,
  status,
  outlined,
  disabled,
  size,
  width,
  height,
  maxWidth,
  rounded,
  children,
  leftIcon,
  rightIcon,
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
        className="bg-white p-4 rounded-lg absolute w-full shadow-sd_medium text-t_dark"
      >
        {children}
      </animated.div>
    </div>
  );
};

export default AutoComplete;
