import React from 'react';
import classnames from 'classnames';

/* Props 
- leftIcon: show left icon
- rightIcon: show right icon // You should not pass both leftIcon and rightIcon
- type: button type
- size: button size
- shape: button shape
- disabled: disable button, it no longer can be clicked
- unbold: unbold button text
- onClick: onClick event
- width: specify width of button
- height: specify height of button
- border-radius: button border radius
- dark: dark mode
*/

const TYPES = ['primary', 'default', 'danger', 'disabled'];
const SIZE = ['normal', 'large'];
const SHAPE = ['rectangle', 'circle'];

const Button = (props) => {
  const { children, leftIcon, rightIcon, type, size, shape, onClick, disabled, unbold, width, height, dark } = props;

  // Check validity of props
  const checkType = disabled ? '' : TYPES.includes(type) ? type : TYPES[0];
  const checkSize = SIZE.includes(size) ? size : SIZE[0];
  const checkShape = SHAPE.includes(shape) ? shape : SHAPE[0];

  return (
    <button
      className={classnames(
        // General
        'rounded-md transition duration-300 flex items-center justify-center gap-2',

        // Type
        {
          'bg-ac_blue text-white hover:bg-opacity-90': checkType === 'primary',
          'border-[1px] border-br_light_gray hover:bg-br_light_gray': checkType === 'default',
          'text-t_dark': checkType === 'default' && !dark,
          'text-white': checkType === 'default' && dark,
          'text-ac_red border-[1px] border-ac_red hover:bg-ac_red hover:text-white': checkType === 'danger',
        },

        // Size
        {
          'text-md px-4': checkSize === 'normal',
          'text-lg px-5': checkSize === 'large',
          'h-11': checkSize === 'normal' && !height,
          'h-12': checkSize === 'large' && !height,
        },

        // Shape
        {
          '': checkShape === 'rectangle',
        },

        // Special
        disabled && 'cursor:default pointer-events-none text-t_light_gray_3 bg-bg_primary',
      )}
      onClick={!disabled ? onClick : undefined}
      style={{
        width: width,
        height: height,
      }}
    >
      {leftIcon}
      <span className={classnames([unbold ? 'font-normal' : 'font-bold'])}>{children}</span>
      {rightIcon}
    </button>
  );
};

export default Button;
