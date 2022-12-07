import React from 'react';
import ReactDom from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

const Modal = ({ children, isShowing, hide, header }) => {
  return ReactDom.createPortal(
    isShowing && (
      <>
        <div className="bg-black bg-opacity-20 z-50 fixed top-0 left-0 bottom-0 right-0 flex p-7" onClick={hide}>
          <div
            className="bg-white rounded-lg p-7 m-auto max-w-[400px] w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="font-bold text-black text-h3 flex justify-between gap-4">
              {header}
              <button onClick={hide} className="p-[6px] bg-bg_light_gray_2 rounded-full h-fit">
                <IoCloseOutline />{' '}
              </button>
            </header>

            <div className="mt-6">{children}</div>
          </div>
          ,
        </div>
      </>
    ),
    document.getElementById('modal-portal'),
  );
};

export default Modal;
