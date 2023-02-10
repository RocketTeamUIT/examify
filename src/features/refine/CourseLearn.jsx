import classNames from 'classnames';
import { VIDEOS } from 'data/mock';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineCheck, AiOutlineMenu } from 'react-icons/ai';
import Tracker from './Tracker';
import IconButton from './IconButton';
import VideoScroll from './VideoScroll';

export default function CourseLearn() {
  const [focus, setFocus] = useState(0);
  const [show, setShow] = useState(localStorage.getItem('show-content-sidebar') === 'true');
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

    if (nextValue < videoRefs.current.length && nextValue >= 0 && VIDEOS[nextValue].unlocked) setFocus(nextValue);
  }

  useEffect(() => {
    ref.current.scrollTo({
      top: videoRefs.current[focus].getBoundingClientRect().top + ref.current.scrollTop - 108,
      behavior: 'smooth',
    });
  }, [focus]);

  function toggle() {
    localStorage.setItem('show-content-sidebar', !show);
    setShow((prev) => !prev);
  }

  return (
    <div className="bg-white flex h-[calc(100vh-60px)] relative">
      <div className="px-5 flex-1 flex justify-between h-full">
        <div className="h-full flex flex-col justify-between py-5">
          <IconButton icon={AiOutlineArrowUp} ref={prevRef} onClick={() => next(-1, prevRef.current)} />
          <IconButton icon={AiOutlineArrowDown} ref={nextRef} onClick={() => next(1, nextRef.current)} />
        </div>

        <VideoScroll outerRef={ref} videoRefs={videoRefs} focus={focus} setFocus={setFocus} />

        <div
          className={classNames('h-full flex flex-col py-5', VIDEOS[focus].learnt ? 'justify-between' : 'justify-end')}
        >
          {VIDEOS[focus].learnt && <IconButton icon={AiOutlineCheck} text="text-[#2C972D]" disabled />}
          <IconButton icon={AiOutlineMenu} onClick={toggle} />
        </div>
      </div>

      <div
        className={classNames(
          'absolute duration-500 left-0 top-0 right-0 bottom-0 bg-black bg-opacity-20 lg:opacity-0 lg:pointer-events-none',
          !show && 'opacity-0 pointer-events-none',
        )}
        onClick={toggle}
      ></div>

      <div
        className={classNames(
          'h-full w-[396px] duration-500 lg:static right-0 absolute bg-white max-w-4/5',
          show ? 'mr-0' : '-mr-[396px]',
        )}
      >
        <Tracker focus={focus} setFocus={setFocus} />
      </div>
    </div>
  );
}
