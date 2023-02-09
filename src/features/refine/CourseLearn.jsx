import React, { useRef, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineCheck, AiOutlineMenu } from 'react-icons/ai';
import IconButton from './IconButton';
import VideoScroll from './VideoScroll';

export default function CourseLearn() {
  const [focus, setFocus] = useState(0);
  const videoRefs = useRef([]);
  const ref = useRef();

  function next(value) {
    const nextIndex = focus + value;
    if (nextIndex >= videoRefs.current.length || nextIndex < 0) return;
    ref.current.scrollTo({
      top: videoRefs.current[nextIndex].getBoundingClientRect().top + ref.current.scrollTop - 108,
      behavior: 'smooth',
    });
    setFocus(nextIndex);
  }

  return (
    <div className="bg-white px-5 h-[calc(100vh-60px)] flex justify-between">
      <div className="h-full flex flex-col justify-between py-5">
        <IconButton icon={AiOutlineArrowUp} onClick={() => next(-1)} />
        <IconButton icon={AiOutlineArrowDown} onClick={() => next(1)} />
      </div>

      <VideoScroll outerRef={ref} videoRefs={videoRefs} focus={focus} setFocus={setFocus} />

      <div className="h-full flex flex-col justify-between py-5">
        <IconButton icon={AiOutlineCheck} text="text-[#2C972D]" disabled />
        <IconButton icon={AiOutlineMenu} />
      </div>
    </div>
  );
}
