import classNames from 'classnames';
import React from 'react';

export default function IconButton({ icon: Icon, onClick, text, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames('h-14 w-14 rounded-full bg-bg_light_gray flex items-center justify-center', text)}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
