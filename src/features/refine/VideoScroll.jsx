import React from 'react';
import Video from './Video';
import { useRef } from 'react';
import { VIDEOS } from 'data/mock';
import 'assets/css/video.css';
import classNames from 'classnames';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function VideoScroll({ videoRefs, focus, setFocus, outerRef }) {
  const [disabled, setDisabled] = useState(false);
  const flag = useRef(false);

  const checkNext = useCallback(() => {
    return focus < VIDEOS.length - 1 && VIDEOS[(focus + 1) % VIDEOS.length].unlocked;
  }, [focus]);

  const checkPrev = useCallback(() => {
    return focus > 0;
  }, [focus]);

  function handleScroll(e) {
    if (!flag.current) {
      if (e.deltaY > 0 && checkNext()) {
        setFocus((prev) => prev + 1);
        flag.current = true;
      } else if (e.deltaY < 0 && checkPrev()) {
        setFocus((prev) => prev - 1);
        flag.current = true;
      }
      if (flag.current) {
        setTimeout(() => {
          flag.current = false;
        }, 500);
      }
    }
  }

  const handleKeyUp = useCallback(
    (e) => {
      if (!flag.current) {
        if ((e.code === 'ArrowUp' || e.keyCode === 38) && checkPrev()) {
          setFocus((prev) => prev - 1);
          flag.current = true;
        }

        if ((e.code === 'ArrowDown' || e.keyCode === 40) && checkNext()) {
          setFocus((prev) => prev + 1);
          flag.current = true;
        }

        if (flag.current) {
          setTimeout(() => {
            flag.current = false;
          }, 500);
        }
      }
    },
    [checkPrev, checkNext, setFocus],
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);

  useEffect(() => {
    if (!VIDEOS[(focus + 1) % VIDEOS.length].unlocked) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [focus]);

  return (
    <>
      <div
        className={classNames('h-full flex-1 space-y-6 custom-scroll', disabled ? 'overflow-hidden' : 'overflow-auto')}
        ref={outerRef}
        onWheel={handleScroll}
      >
        <div className="h-5"></div>

        {VIDEOS.map((item, index) => (
          <Video focus={focus} data={item} key={index} index={index} ref={(el) => (videoRefs.current[index] = el)} />
        ))}

        <div className="h-5"></div>
      </div>
    </>
  );
}
