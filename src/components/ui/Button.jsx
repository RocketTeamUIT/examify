import React from 'react';
import classnames from 'classnames';
import { forwardRef } from 'react';

/* Props 
- classnames: classnames for button
- color: specify the color
- leftIcon: show left icon
- rightIcon: show right icon // You should not pass both leftIcon and rightIcon
- type: button type
    - primary
    - default
    - danger
- size: button size
    - normal
    - large
- shape: button shape
    - circle
    - rectangle
- disabled: disable button, it no longer can be clicked
- unbold: unbold button text
- onClick: onClick event
- width: specify width of button
- height: specify height of button
- rounded: button border radius
    - [topLeft, topRight, bottomRight, bottomLeft]
- dark: dark mode
*/

const TYPES = ['primary', 'default', 'danger', 'disabled', 'text', 'plain'];
const SIZE = ['normal', 'large'];
const SHAPE = ['rectangle', 'circle'];

const Button = (
  {
    children,
    className,
    color,
    leftIcon,
    rightIcon,
    type,
    size,
    shape,
    onClick,
    disabled,
    unbold,
    width,
    height,
    dark,
    rounded = [],
    testid,
  },
  ref,
) => {
  // Check validity of props
  const checkType = disabled ? '' : TYPES.includes(type) ? type : TYPES[0];
  const checkSize = SIZE.includes(size) ? size : SIZE[0];
  const checkShape = SHAPE.includes(shape) ? shape : SHAPE[0];

  // Get children based on shape
  const getChildren = () => {
    if (checkShape === 'circle' && (leftIcon || rightIcon)) return null;

    return (
      <span className={classnames([unbold ? 'font-normal' : 'font-bold'])}>
        {checkShape === 'circle' && !leftIcon && !rightIcon ? children[0].toUpperCase() : children}
      </span>
    );
  };

  return (
    <button
      data-testid={testid}
      className={classnames(
        // General
        'transition duration-300 flex items-center justify-center gap-2',

        // Type
        {
          'bg-ac_blue text-white hover:bg-opacity-90': checkType === 'primary',
          'border-[1px] border-br_light_gray hover:bg-br_light_gray': checkType === 'default',
          'text-t_dark': ['default', 'text'].indexOf(checkType) !== -1 && !dark,
          'text-white': ['default', 'text'].indexOf(checkType) !== -1 && dark,
          'text-ac_red border-[1px] border-ac_red hover:bg-ac_red hover:text-white': checkType === 'danger',
          'bg-white hover:bg-gray-100': checkType === 'plain',
        },

        // Size
        {
          'text-md': checkSize === 'normal',
          'text-lg': checkSize === 'large',
          'h-11': checkSize === 'normal' && !height,
          'h-12': checkSize === 'large' && !height,
        },

        // Shape
        {
          'rounded-md px-4': checkShape === 'rectangle',
          'rounded-full aspect-square': checkShape === 'circle',
        },

        // Special
        disabled && 'cursor:default pointer-events-none text-t_light_gray_3',
        disabled && type !== 'text' && 'bg-bg_primary',

        className,
      )}
      onClick={!disabled ? onClick : undefined}
      style={{
        width: width,
        height: height,
        borderTopLeftRadius: rounded[0],
        borderTopRightRadius: rounded[1],
        borderBottomRightRadius: rounded[2],
        borderBottomLeftRadius: rounded[3],
        color: color,
      }}
      ref={ref}
    >
      {leftIcon}
      {getChildren()}
      {rightIcon}
    </button>
  );
};

export default forwardRef(Button);
