import { useEffect } from 'react';

const useCountdown = (time, onFinish) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, [time * 1000]);
    return () => {
      clearInterval(timeout);
    };
  }, [onFinish, time]);
};

export default useCountdown;
