import React, { useEffect } from 'react';
import Input from './Input';
import { BiSearch } from 'react-icons/bi';
import Tippy from '@tippyjs/react/headless';
import { useSpring, animated } from 'react-spring';
import { useRef } from 'react';

const AutoComplete = ({ value, setValue, outlined, width, height }) => {
  const config = { tension: 300, friction: 15, clamp: false };
  const initialStyles = {
    opacity: 0,
    transform: 'scale(0.5)',
  };
  const [props, setSpring] = useSpring(() => initialStyles);
  const tippyRef = useRef();
  const wrapperRef = useRef();
  let tippy = null;

  // Animation using react-spring
  const onMount = () => {
    setSpring.start({
      opacity: 1,
      transform: 'scale(1)',
      onRest: () => {},
      config,
    });
  };

  const onHide = ({ unmount }) => {
    setSpring.start({
      ...initialStyles,
      onRest: unmount,
      config: { ...config, clamp: true },
    });
  };

  // Manually trigger tippy
  const showTippy = () => {
    tippy && tippy.show();
  };

  // Hide tippy when click outside tippy
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        tippyRef.current &&
        wrapperRef.current &&
        !tippyRef.current.contains(e.target) &&
        !wrapperRef.current.contains(e.target)
      ) {
        tippy && tippy.hide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [tippyRef]);

  return (
    <Tippy
      trigger="manual"
      animation
      hideOnClick={false}
      onMount={onMount}
      onHide={onHide}
      onCreate={(instance) => (tippy = instance)}
      render={(attrs) => (
        <animated.div ref={tippyRef} style={props} className="bg-black text-white p-2 rounded-md" {...attrs}>
          <ul>
            <li>f</li>
            <li>ff</li>
            <li>fff a ajfkawjfkjwkefjkawjfekjkjwkjfk awjefkajwefkjwkfekfe</li>
          </ul>
        </animated.div>
      )}
    >
      <div className="w-fit" ref={wrapperRef}>
        <Input
          leftIcon={<BiSearch className="w-5 h-5" />}
          type="text"
          outlined={outlined}
          width={width}
          height={height}
          onFocus={showTippy}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </Tippy>
  );
};

export default AutoComplete;
