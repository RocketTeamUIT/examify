import { useState } from 'react';

function useHoverCondition() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return {
    isHovering,
    handleHover: {
      handleMouseOver,
      handleMouseOut,
    },
  };
}

export default useHoverCondition;
