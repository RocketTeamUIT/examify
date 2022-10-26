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
*/

const TYPES = ['primary', 'default', 'danger', 'disabled'];
const SIZE = ['normal', 'large'];

const Button = (props) => {
  const { children, leftIcon, rightIcon, type, size, onClick, disabled, unbold, width, height } = props;

  // Check validity of props
  const checkButtonType = disabled ? '' : TYPES.includes(type) ? type : TYPES[0];
  const checkButtonSize = SIZE.includes(size) ? size : SIZE[0];

  return (
    <button
      className={classnames(
        // General
        'rounded-md transition duration-300 flex items-center justify-center gap-2',

        // Type
        {
          'bg-ac_blue text-white hover:bg-opacity-90': checkButtonType === 'primary',
          'border-[1px] border-br_light_gray text-t_dark hover:bg-br_light_gray': checkButtonType === 'default',
          'text-ac_red border-[1px] border-ac_red hover:bg-ac_red hover:text-white': checkButtonType === 'danger',
        },

        // Size
        {
          'text-md px-4 h-11': checkButtonSize === 'normal',
          'text-lg px-5 h-12': checkButtonSize === 'large',
        },

        // Special
        disabled && 'cursor:default pointer-events-none text-t_light_gray_3 bg-bg_primary',
      )}
      onClick={!disabled ? onClick : undefined}
    >
      {leftIcon}
      <span className={classnames([unbold ? 'font-normal' : 'font-bold'])}>{children}</span>
      {rightIcon}
    </button>
  );
};

export default Button;
{
  /* <button
      className={classnames([
        // General
        'rounded-md transition duration-300 flex items-center justify-center gap-2',
        // Size and Icon
        (size === 'normal' || !size) && 'px-4 h-11 text-md',
        size === 'big' && 'text-lg px-5 h-12',
        leftIcon && (size === 'normal' ? 'pl-[14px]' : 'pl-[18px]'),
        rightIcon && (size === 'normal' ? 'pr-[14px]' : 'pr-[18px]'),
        // Type
        (type === 'primary' || !type) && 'bg-ac_blue text-white hover:bg-opacity-90',
        type === 'default' && 'border-[1px] border-br_light_gray text-t_dark hover:bg-br_light_gray',
        // Special
        disabled && 'bg-primary cursor:default pointer-events-none text-t_light_gray_3',
        danger && 'text-ac_red border-ac_red hover:bg-ac_red hover:text-white',
      ])}
      onClick={!disabled && onClick}
    ></button> */
}
