import React from 'react';
import { BloodBar } from './components';

const ContestMain = () => {
  return (
    <div className="h-screen grid grid-cols-12 mx-[100px] gap-5">
      <div className="h-[237px] bg-bg_light_gray rounded-b-3xl col-span-full">
        I'm very happy _____ in India. I really miss being there.
        <div className="w-1/2">
          <BloodBar />
        </div>
      </div>
    </div>
  );
};

export default ContestMain;
