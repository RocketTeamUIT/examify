import classNames from 'classnames';
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { IoIosPause } from 'react-icons/io';
import { IoPlay, IoVolumeMedium, IoVolumeMute } from 'react-icons/io5';
import { mergeRefs } from 'react-merge-refs';

const Video = forwardRef(({ index, focus, data }, ref) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [expand, setExpand] = useState(false);
  const videoRef = useRef();
  const flag = useRef(true);

  useEffect(() => {
    if (flag.current && focus === index) {
      isAllowed();
      return;
    }

    async function isAllowed() {
      try {
        await videoRef.current.play();
        flag.current = false;
        setPlaying(true);
      } catch (error) {
        console.log('Failed');
      }
    }

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
  const VolumeButton = muted ? IoVolumeMute : IoVolumeMedium;

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

  const toggleVolume = useCallback(() => {
    setMuted((prev) => !prev);
  }, []);

  function toggleExpand() {
    setExpand((prev) => !prev);
  }

  return (
    <div className="m-auto bg-black flex-1 rounded-2xl h-[calc(100vh-156px)] aspect-[9/16] min-h-[500px] relative">
      <video
        loop
        muted={muted}
        autoPlay
        onClick={toggle}
        ref={mergeRefs([ref, videoRef])}
        className="rounded-2xl h-full"
        src={data.src}
      />
      <PlayButton className="h-6 w-6 absolute top-5 left-5 text-white" onClick={toggle} />
      <VolumeButton className="h-6 w-6 absolute top-5 right-5 text-white" onClick={toggleVolume} />
      <div className="bg-gradient-to-t from-[#000000ab] to-[#00000000] absolute bottom-0 left-0 right-0 rounded-[0_0_16px_16px] p-5 text-white text-[20px_28px]">
        <div className="bg-[#33333380] p-3 font-medium rounded-xl mb-3">
          Haerin being a cat as she’s always. Lorem ipsum dolor sit ame
        </div>
        <h5 className="font-semibold mb-[7px]">
          Bài {index + 1}. {data.title}
        </h5>
        <p onDoubleClick={toggleExpand} className={classNames(!expand && 'custom-ellipsis')}>
          {data.description}
        </p>
      </div>
    </div>
  );
});

export default Video;
