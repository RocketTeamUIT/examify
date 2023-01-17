import audiomp3 from 'assets/audio/audio.mp3';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import { useRef } from 'react';
import Audio from './Audio';
import Volumn from './Volumn';
import Setting from './Setting';

function AudioPlayer() {
  const audioRef = useRef();

  const { curTime, curVolume, duration, playing, muting, setMuting, setPlaying, setClickedTime, setClickedVolume } =
    useAudioPlayer(audioRef);

  return (
    <div className="mt-10">
      <audio src={audiomp3} ref={audioRef}></audio>
      <div className="flex items-center">
        <Audio
          playing={playing}
          setPlaying={setPlaying}
          curTime={curTime}
          duration={duration}
          setClickedTime={setClickedTime}
        />
        <Volumn muting={muting} curVolume={curVolume} setMuting={setMuting} setClickedVolume={setClickedVolume} />
        <Setting />
      </div>
    </div>
  );
}

export default AudioPlayer;
