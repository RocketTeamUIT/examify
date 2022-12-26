import classNames from 'classnames';
import React from 'react';
import ReactDom from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

const Modal = ({ children, excludeHeader, isShowing, hide, header, maxWidth, className, type, borderRadius }) => {
  return ReactDom.createPortal(
    <div
      className={classNames(
        'bg-black bg-opacity-20 z-50 fixed top-0 left-0 bottom-0 right-0 flex transition-all',
        !isShowing && 'pointer-events-none opacity-0',
        // Modal Type
        type === 'normal' && 'p-7',
        type === 'right' && 'duration-500',
      )}
      onClick={hide}
      data-testid="test-wrapper"
    >
      <div
        data-testid="test-modal"
        className={classNames(
          'bg-white p-7 w-full max-h-full overflow-x-auto side-slide-modal space-y-6',
          maxWidth,
          borderRadius,
          // Modal Type
          type === 'normal' && 'm-auto',
          type === 'right' && {
            'ml-auto my-auto h-full relative': true,
            'left-full opacity-0': !isShowing,
            'left-0 opacity-100': isShowing,
          },
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {!excludeHeader && (
          <header className="font-bold text-black text-h3 flex justify-between gap-4">
            {header}
            <button onClick={hide} className="p-[6px] bg-bg_light_gray_2 rounded-full h-fit">
              <IoCloseOutline />{' '}
            </button>
          </header>
        )}

        <div className="">{children}</div>
      </div>
    </div>,
    document.getElementById('modal-portal'),
  );
};

Modal.defaultProps = {
  maxWidth: 'max-w-[400px]',
  type: 'normal',
  borderRadius: 'rounded-lg',
};

export default Modal;
