import React from 'react';
import Video from './Video';
import { useRef } from 'react';
import { VIDEOS } from 'data/mock';
import 'assets/css/video.css';

export default function VideoScroll({ videoRefs, focus, setFocus, outerRef }) {
  const ref = useRef(0);
  const flag = useRef(false);

  function handleScroll(e) {
    if (!flag.current) {
      if (e.currentTarget.scrollTop > ref.current) {
        if (focus < videoRefs.current.length) {
          setFocus((prev) => prev + 1);
        }
      } else if (e.currentTarget.scrollTop < ref.current) {
        if (focus > 0) {
          setFocus((prev) => prev - 1);
        }
      }
      flag.current = true;
      setTimeout(() => {
        flag.current = false;
      }, 500);
    }
    ref.current = e.currentTarget.scrollTop;
  }

  return (
    <>
      <div className="h-full flex-1 space-y-6 overflow-auto" ref={outerRef} onScroll={handleScroll}>
        <div className="h-5"></div>

        {VIDEOS.map((item, index) => (
          <Video focus={focus} data={item} key={index} index={index} ref={(el) => (videoRefs.current[index] = el)} />
        ))}

        <div className="h-5"></div>
      </div>
    </>
  );
}
