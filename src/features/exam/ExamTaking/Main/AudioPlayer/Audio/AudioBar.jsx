import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import moment from 'moment';
import 'moment-duration-format';
import { Bar } from '../../../../components';
import { useState } from 'react';

function AudioBar({ duration, curTime, onTimeUpdate }) {
  const [curHoverTime, setCurHoverTime] = useState();

  function formatDuration(duration) {
    return moment.duration(duration, 'seconds').format('mm:ss', { trim: false });
  }

  function onUpdateHoverTime(curTime) {
    setCurHoverTime(curTime);
  }

  return (
    <div className="w-full flex items-center select-none">
      <Tippy followCursor="horizontal" plugins={[followCursor]} content={formatDuration(curHoverTime)}>
        <Bar
          className="ml-5 mr-2"
          min={0}
          max={duration}
          curValue={curTime}
          onValueUpdate={onTimeUpdate}
          onUpdateHoverTime={onUpdateHoverTime}
        />
      </Tippy>
      <span className="text-h6 text-right text-black min-w-[48px]">{`${formatDuration(curTime - duration)}`}</span>
    </div>
  );
}

export default AudioBar;
