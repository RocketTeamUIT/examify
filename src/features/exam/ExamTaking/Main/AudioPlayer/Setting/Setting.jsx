import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { HiCog8Tooth, HiOutlineCog8Tooth } from 'react-icons/hi2';
import useHoverCondition from 'hooks/useHoverCondition';
import classNames from 'classnames';

function Setting({ handleClick = () => {}, className }) {
  const { isHovering, handleHover } = useHoverCondition();

  return (
    <Tippy content="Tùy chọn">
      <button
        onMouseOver={handleHover.handleMouseOver}
        onMouseOut={handleHover.handleMouseOut}
        onClick={() => handleClick()}
        className={classNames(
          'flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-ac_yellow rounded',
          className,
        )}
      >
        {isHovering ? <HiCog8Tooth size={24} enableBackground="true" /> : <HiOutlineCog8Tooth size={24} />}
      </button>
    </Tippy>
  );
}

export default Setting;
