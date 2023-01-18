import Play from './Play';
import Pause from './Pause';
import AudioBar from './AudioBar';

function Audio({ playing, setPlaying, curTime, duration, setClickedTime }) {
  return (
    <div className="flex-1 lg:basis-4/5 flex items-center">
      {playing ? <Pause handleClick={() => setPlaying(false)} /> : <Play handleClick={() => setPlaying(true)} />}
      <AudioBar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)} />
    </div>
  );
}

export default Audio;
