import { HiPause, HiOutlinePause } from 'react-icons/hi2';
import useHoverCondition from 'hooks/useHoverCondition';

function Pause({ handleClick }) {
  const { isHovering, handleHover } = useHoverCondition();

  return (
    <button
      onClick={() => handleClick()}
      onMouseOver={handleHover.handleMouseOver}
      onMouseOut={handleHover.handleMouseOut}
      className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-ac_yellow rounded"
    >
      {isHovering ? <HiPause size={32} enableBackground="true" /> : <HiOutlinePause size={32} />}
    </button>
  );
}

export default Pause;
