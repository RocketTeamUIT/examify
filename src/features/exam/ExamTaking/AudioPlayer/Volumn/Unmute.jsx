import { HiSpeakerWave, HiOutlineSpeakerWave } from 'react-icons/hi2';
import useHoverCondition from 'hooks/useHoverCondition';

function Unmute({ handleClick }) {
  const { isHovering, handleHover } = useHoverCondition();

  return (
    <button
      onMouseOver={handleHover.handleMouseOver}
      onMouseOut={handleHover.handleMouseOut}
      onClick={() => handleClick()}
      className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-ac_yellow rounded"
    >
      {isHovering ? <HiSpeakerWave size={24} enableBackground="true" /> : <HiOutlineSpeakerWave size={24} />}
    </button>
  );
}

export default Unmute;
