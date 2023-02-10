import classNames from 'classnames';
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { CgTranscript } from 'react-icons/cg';
import { IoIosPause } from 'react-icons/io';
import { IoPlay, IoVolumeMedium, IoVolumeMute } from 'react-icons/io5';
import { mergeRefs } from 'react-merge-refs';

const Video = forwardRef(({ index, focus, data }, ref) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [expand, setExpand] = useState(false);
  const [transcript, setTranscript] = useState({});
  const [show, setShow] = useState(localStorage.getItem('show-transcript') === 'true');
  const videoRef = useRef();

  useEffect(() => {
    try {
      if (focus === index) {
        setTimeout(async () => {
          videoRef.current.currentTime = 0;
          await videoRef.current.play();
          setPlaying(true);
        }, [200]);
      } else {
        setPlaying(false);
        videoRef.current.pause();
      }
      setTranscript({});
    } catch (error) {}
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

  function findTranscript(time) {
    return data.transcript.find((item) => item.start / 1000 >= time || !item.end || time <= item.end / 1000);
  }

  function updateTranscript(e) {
    const currentTime = e.currentTarget.currentTime;

    if (!transcript.start) {
      setTranscript(findTranscript(currentTime));
      return;
    }

    if (!transcript.end) {
      return;
    }

    if (currentTime >= transcript.end / 1000) {
      setTranscript(findTranscript(currentTime));
    }
  }

  function toggleShow() {
    localStorage.setItem('show-transcript', !show);
    setShow((prev) => !prev);
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
        onTimeUpdate={(e) => updateTranscript(e)}
      />
      <PlayButton className="h-6 w-6 absolute top-5 left-5 text-white" onClick={toggle} />
      <VolumeButton className="h-6 w-6 absolute top-5 right-5 text-white" onClick={toggleVolume} />
      <div className="bg-gradient-to-t from-[#000000ab] to-[#00000000] absolute bottom-0 left-0 right-0 rounded-[0_0_16px_16px] p-5 text-white text-[20px_28px]">
        {/* Transcript */}
        {playing && (
          <div
            className="bg-[#33333380] hover:bg-[#333333bb] cursor-pointer p-3 font-medium rounded-xl w-fit"
            onClick={toggleShow}
          >
            {show ? <p className="overflow-hidden max-h-12">{transcript.text}</p> : <CgTranscript size="20px" />}
          </div>
        )}

        <h5 className="font-semibold mt-3 mb-[7px]">
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
