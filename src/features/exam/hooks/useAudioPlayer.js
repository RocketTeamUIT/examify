import { useState, useEffect } from 'react';

function useAudioPlayer(audioRef) {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [curVolume, setCurVolume] = useState(1);
  const [curSpeed, setCurSpeed] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [muting, setMuting] = useState(false);
  const [clickedTime, setClickedTime] = useState();
  const [clickedVolume, setClickedVolume] = useState();
  const [clickedSpeed, setClickedSpeed] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const audio = audioRef.current;

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };
    const setAudioTime = () => setCurTime(audio.currentTime);
    const setAudioVolume = () => setCurVolume(audio.volume);
    const setAudioSpeed = () => setCurSpeed(audio.playbackRate);

    // DOM listeners: update React state on DOM events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('volumechange', setAudioVolume);
    audio.addEventListener('ratechange', setAudioSpeed);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();
    muting ? (audio.muted = true) : (audio.muted = false);

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    if (clickedVolume && clickedVolume !== curVolume) {
      audio.volume = clickedVolume;
      setClickedVolume(null);
    }

    if (clickedSpeed && clickedSpeed !== curSpeed) {
      audio.playbackRate = clickedSpeed;
      setClickedSpeed(null);
    }

    // effect cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('volumechange', setAudioVolume);
      audio.removeEventListener('ratechange', setAudioSpeed);
    };
  });

  return {
    curVolume,
    curTime,
    curSpeed,
    duration,
    playing,
    muting,
    setPlaying,
    setMuting,
    setClickedTime,
    setClickedVolume,
    setClickedSpeed,
  };
}

export default useAudioPlayer;
