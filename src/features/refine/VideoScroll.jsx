import React from 'react';
import Video from './Video';
import 'assets/css/hide_scroll.css';
import { useRef } from 'react';

const VIDEOS = [
  {
    src: 'https://res.cloudinary.com/doxsstgkc/video/upload/v1675910320/examify-refine/ssstik.io_1675910213370_bqk8qv.mp4',
  },
  {
    src: 'https://res.cloudinary.com/doxsstgkc/video/upload/v1675917834/examify-refine/y2mate.com_-_NewJeans_%E1%84%82%E1%85%B2%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B3_Attention_Funk_Remix_Prod_MINDA_1080p_prm2ld.mp4',
  },
  {
    src: 'https://res.cloudinary.com/doxsstgkc/video/upload/v1675918033/examify-refine/ssstik.io_1675830318883_dj2yhu.mp4',
  },
  {
    src: 'https://res.cloudinary.com/doxsstgkc/video/upload/v1675918351/examify-refine/ssstik.io_1675918139190_avtevq.mp4',
  },
  {
    src: 'https://res.cloudinary.com/doxsstgkc/video/upload/v1675924886/examify-refine/ssstik.io_1675924762697_pusrsw.mp4',
  },
];

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
          <Video focus={focus} src={item.src} key={index} index={index} ref={(el) => (videoRefs.current[index] = el)} />
        ))}
        <div className="h-5"></div>
      </div>
    </>
  );
}
