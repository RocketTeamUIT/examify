import classNames from 'classnames';
import { forwardRef, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

const Bar = forwardRef(
  (
    {
      min,
      max,
      curValue,
      colorStart = '#F9E492',
      colorStop = '#D9D9D9',
      onValueUpdate = () => {},
      onUpdateHoverTime = () => {},
      seek = true,
      className,
    },
    ref,
  ) => {
    const barProcessRef = useRef();
    const curPercentage = (curValue / max) * 100;

    function calcCurValueInteract(e) {
      const clickPositionInPage = e.pageX;

      // Query bar element & calculate bar start X axis, bar width
      const bar = barProcessRef.current;
      const barStart = bar.getBoundingClientRect().left + window.scrollX;
      const barWidth = bar.offsetWidth;

      // Return current value / max
      const clickPositionInBar = clickPositionInPage - barStart;
      const unitPerPixel = max / barWidth;

      // Control boundry value
      let curValueInteract = unitPerPixel * clickPositionInBar;
      if (curValueInteract > max) curValueInteract = Math.min(curValueInteract, max);
      if (curValueInteract < min) curValueInteract = Math.max(curValueInteract, min);

      return curValueInteract;
    }

    function handleDrag(e) {
      onValueUpdate(calcCurValueInteract(e));

      const updateTimeOnMove = (eMove) => {
        onValueUpdate(calcCurValueInteract(eMove));
      };

      document.addEventListener('mousemove', updateTimeOnMove);

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', updateTimeOnMove);
      });
    }

    return (
      <div
        onMouseMove={(e) => onUpdateHoverTime(calcCurValueInteract(e))}
        className={classNames(`flex items-center h-[6px] flex-1 rounded relative`, className, {
          'cursor-pointer': seek,
        })}
        style={{
          background: `linear-gradient(to right, ${colorStart} ${curPercentage}%, ${colorStop} 0)`,
        }}
        onMouseDown={(e) => handleDrag(e)}
        ref={mergeRefs([barProcessRef, ref])}
      >
        {seek && (
          <span
            className="rounded-full h-4 w-4 bg-white relative border-t_light_gray border border-solid"
            style={{ left: `calc(${curPercentage}% - 8px)` }}
          />
        )}

        {!seek && (
          <span
            className="absolute -top-5 text-h6"
            style={{
              left: `calc(${curPercentage}% - 8px)`,
            }}
          >
            {curValue}
          </span>
        )}
      </div>
    );
  },
);

export default Bar;
