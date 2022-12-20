import { useEffect } from 'react';
import { useState } from 'react';

const useCountdown = (time, onFinish) => {
  const [, setSecs] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecs((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          onFinish();
        }
        return prev - 1;
      });
    }, [1000]);
    return () => {
      clearInterval(interval);
    };
  }, [onFinish]);
};

export default useCountdown;
