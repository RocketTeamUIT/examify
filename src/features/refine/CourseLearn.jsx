import classNames from 'classnames';
import { VIDEOS } from 'data/mock';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineCheck, AiOutlineMenu } from 'react-icons/ai';
import IconButton from './IconButton';
import VideoScroll from './VideoScroll';

export default function CourseLearn() {
  const [focus, setFocus] = useState(0);
  const videoRefs = useRef([]);
  const prevRef = useRef();
  const nextRef = useRef();
  const ref = useRef();

  function next(value, el) {
    const nextValue = focus + value;

    // debounce
    el.style.setProperty('pointer-events', 'none');
    setTimeout(() => {
      el.style.setProperty('pointer-events', 'auto');
    }, 800);

    if (nextValue < videoRefs.current.length && nextValue >= 0)
      ref.current.scrollTo({
        top: ref.current.scrollTop + value,
      });
  }

  useEffect(() => {
    ref.current.scrollTo({
      top: videoRefs.current[focus].getBoundingClientRect().top + ref.current.scrollTop - 108,
      behavior: 'smooth',
    });
  }, [focus]);

  return (
    <div className="bg-white px-5 h-[calc(100vh-60px)] flex justify-between">
      <div className="h-full flex flex-col justify-between py-5">
        <IconButton icon={AiOutlineArrowUp} ref={prevRef} onClick={() => next(-1, prevRef.current)} />
        <IconButton icon={AiOutlineArrowDown} ref={nextRef} onClick={() => next(1, nextRef.current)} />
      </div>

      <VideoScroll outerRef={ref} videoRefs={videoRefs} focus={focus} setFocus={setFocus} />

      <div
        className={classNames('h-full flex flex-col py-5', VIDEOS[focus].learnt ? 'justify-between' : 'justify-end')}
      >
        {VIDEOS[focus].learnt && <IconButton icon={AiOutlineCheck} text="text-[#2C972D]" disabled />}
        <IconButton icon={AiOutlineMenu} />
      </div>
    </div>
  );
}
