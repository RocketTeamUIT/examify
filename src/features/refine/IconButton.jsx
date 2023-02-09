import classNames from 'classnames';
import React, { forwardRef } from 'react';

const IconButton = forwardRef(({ icon: Icon, onClick, text, disabled }, ref) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      className={classNames('h-14 w-14 rounded-full bg-bg_light_gray flex items-center justify-center', text)}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
});

export default IconButton;
