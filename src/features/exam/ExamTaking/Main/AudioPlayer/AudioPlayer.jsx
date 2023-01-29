import useAudioPlayer from '../../../hooks/useAudioPlayer';
import { useRef } from 'react';
import Audio from './Audio';
import Volumn from './Volumn';
import Setting from './Setting';
import classNames from 'classnames';

function AudioPlayer({ src, includeVolume = false, includeSetting = false, className }) {
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
    <div className={className}>
      <audio src={src} ref={audioRef}></audio>
      <div className="flex items-center gap-x-2">
        <Audio
          playing={playing}
          setPlaying={setPlaying}
          curTime={curTime}
          duration={duration}
          setClickedTime={setClickedTime}
        />

        {includeVolume && (
          <Volumn
            className="hidden lg:flex"
            muting={muting}
            curVolume={curVolume}
            setMuting={setMuting}
            setClickedVolume={setClickedVolume}
          />
        )}
        {includeSetting && (
          <Setting
            className={classNames('hidden lg:flex', { '!flex': includeSetting })}
            onChangeSpeed={setClickedSpeed}
            src={src}
          />
        )}
      </div>
    </div>
  );
}

export default AudioPlayer;
