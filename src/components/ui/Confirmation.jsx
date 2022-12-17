import classNames from 'classnames';
import React, { useRef } from 'react';
import { useEffect } from 'react';

import Button from './Button';

const Confirmation = ({ children, top, left, right, bottom, onConfirm, onCancel, showing, hide }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        hide();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [ref, hide]);

  const handleCancel = (e) => {
    onCancel && onCancel(e);
    hide();
  };

  const handleConfirm = (e) => {
    onConfirm && onConfirm(e);
    hide();
  };

  return (
    showing && (
      <div
        ref={ref}
        className={classNames(
          'rounded-lg shadow-sd_medium p-4 bg-white text-center absolute',
          top,
          left,
          right,
          bottom,
        )}
      >
        {children}
        <div className="flex items-center gap-4 mt-3" onClick={handleCancel}>
          <Button height="28px" type="default">
            Huỷ
          </Button>
          <Button height="28px" type="danger" onClick={handleConfirm}>
            OK
          </Button>
        </div>
      </div>
    )
  );
};

Confirmation.defaultProps = {
  top: 'top-0',
};

export default Confirmation;
