import React from 'react';
import { DetailHeader, BestWishes } from '../components';

const LessonVideo = ({ url }) => {
  return (
    <>
      {/* Video */}
      <div className="px-6 md:px-8 lg:px-16 xl:px-[100px] bg-black">
        <iframe
          title="Lesson's Video"
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/wJQ9ig_d8yY"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {url}

      {/* Text */}
      <div className="px-6 md:px-8 lg:px-[100px] mt-8 pb-16">
        <DetailHeader sec={90} />
        <BestWishes />
      </div>
    </>
  );
};

export default LessonVideo;
