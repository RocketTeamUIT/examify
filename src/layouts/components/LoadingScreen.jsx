import React from 'react';
import { Watch } from 'react-loader-spinner';

const LoadingScreen = () => {
  return (
    <div className="fixed flex top-0 left-0 right-0 bottom-0 z-50">
      <div className="m-auto">
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#0E46C7"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
