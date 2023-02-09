import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { IoIosPause } from 'react-icons/io';
import { IoPlay } from 'react-icons/io5';
import { mergeRefs } from 'react-merge-refs';

const Video = forwardRef(({ index, focus, src }, ref) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    if (focus === index) {
      setTimeout(() => {
        setPlaying(true);
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }, [200]);
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  }, [focus, index]);

  const PlayButton = playing ? IoIosPause : IoPlay;

  const toggle = useCallback(() => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }, [playing]);

  const handleKeydown = useCallback(
    (e) => {
      if ((e.key === ' ' || e.code === 'Space' || e.keyCode === 32) && focus === index) {
        e.preventDefault();
        toggle();
      }
    },
    [toggle, focus, index],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  useEffect(() => {
    setTimeout(() => setMuted(false), 2000);
    // videoRef.current.play();
  }, []);

  return (
    <div className="m-auto bg-black flex-1 rounded-2xl h-[calc(100vh-156px)] aspect-[9/16] min-h-[500px] relative">
      <video
        muted={muted}
        loop
        onClick={toggle}
        ref={mergeRefs([ref, videoRef])}
        className="rounded-2xl h-full"
        src={src}
      />
      <PlayButton className="h-6 w-6 absolute top-5 left-5 text-white" onClick={toggle} />
    </div>
  );
});

export default Video;
