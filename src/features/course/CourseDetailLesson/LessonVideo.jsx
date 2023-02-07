import React, { useRef } from 'react';
import { DetailHeader, BestWishes } from '../components';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import { useEffect } from 'react';

const LessonVideo = ({ lesson, callback }) => {
  const ref = useRef();
  const completedRef = useRef(lesson.completed);
  completedRef.current = lesson.completed;

  useEffect(() => {
    const interval = setInterval(async () => {
      if (ref.current) {
        const currentTime = await ref.current.internalPlayer.getCurrentTime();
        const duration = await ref.current.internalPlayer.getDuration();
        if (!duration) return;
        if (currentTime / duration >= 0.8 && completedRef.current === false) {
          callback && callback();
          clearInterval(interval);
        }
      }
    }, [1000]);

    return () => clearInterval(interval);
  }, [callback, lesson]);

  return (
    <>
      {/* Video */}
      <div className="px-6 md:px-8 lg:px-16 xl:px-[100px] bg-black">
        <YouTube
          ref={ref}
          videoId={getYouTubeID(lesson.videoUrl)}
          height
          opts={{
            width: '100%',
            height: '100%',
          }}
          style={{
            width: '100%',
            aspectRatio: '16/9',
          }}
        />
      </div>

      {/* Text */}
      <div className="px-6 md:px-8 lg:px-[100px] mt-8 pb-16">
        <DetailHeader
          title={lesson.name}
          date={lesson.updatedAt.slice(8, 10)}
          month={lesson.updatedAt.slice(5, 7)}
          year={lesson.updatedAt.slice(0, 4)}
        />
        <div className="text-t_gray mt-4">{lesson.description}</div>
        <BestWishes />
      </div>
    </>
  );
};

export default LessonVideo;
