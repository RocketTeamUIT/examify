import useAudioPlayer from '../../../hooks/useAudioPlayer';
import { useRef } from 'react';
import Audio from './Audio';
import Volumn from './Volumn';
import Setting from './Setting';

function AudioPlayer({ src }) {
  const audioRef = useRef();

  const {
    curTime,
    curVolume,
    duration,
    playing,
    muting,
    setMuting,
    setPlaying,
    setClickedTime,
    setClickedVolume,
    setClickedSpeed,
  } = useAudioPlayer(audioRef);

  return (
    <div className="mt-10">
      <audio src={src} ref={audioRef}></audio>
      <div className="flex items-center">
        <Audio
          playing={playing}
          setPlaying={setPlaying}
          curTime={curTime}
          duration={duration}
          setClickedTime={setClickedTime}
        />
        <div className="ml-1 hidden lg:flex lg:basis-1/5 w-full ">
          <Volumn muting={muting} curVolume={curVolume} setMuting={setMuting} setClickedVolume={setClickedVolume} />
          <Setting onChangeSpeed={setClickedSpeed} />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
