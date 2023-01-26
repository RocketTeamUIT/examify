import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Play from './Play';
import Pause from './Pause';
import AudioBar from './AudioBar';

function Audio({ playing, setPlaying, curTime, duration, setClickedTime }) {
  return (
    <div className="flex-1 lg:basis-4/5 flex items-center">
      {playing ? (
        <Tippy content="Dừng phát">
          <Pause handleClick={() => setPlaying(false)} />
        </Tippy>
      ) : (
        <Tippy content="Phát">
          <Play handleClick={() => setPlaying(true)} />
        </Tippy>
      )}
      <AudioBar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)} />
    </div>
  );
}

export default Audio;
