import { HiPlay, HiOutlinePlay } from 'react-icons/hi2';
import useHoverCondition from 'hooks/useHoverCondition';
import { forwardRef } from 'react';

function Play({ handleClick }, ref) {
  const { isHovering, handleHover } = useHoverCondition();

  return (
    <button
      ref={ref}
      onMouseOver={handleHover.handleMouseOver}
      onMouseOut={handleHover.handleMouseOut}
      onClick={() => handleClick()}
      className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-ac_yellow rounded"
    >
      {isHovering ? <HiPlay size={32} enableBackground="true" /> : <HiOutlinePlay size={32} />}
    </button>
  );
}

export default forwardRef(Play);
