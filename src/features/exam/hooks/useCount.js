import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountdown, setCountup } from '../tackleSlice';
import moment from 'moment';
import 'moment-duration-format';

// Duration = second
function useCount() {
  const duration = useSelector((store) => store.tackle.duration);
  const mode = useSelector((store) => store.tackle.mode);
  const kickOff = mode === 'countdown' ? duration : 0;
  const [count, setCount] = useState(kickOff);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (mode === 'countdown' && count > 0) {
        setCount((countPrev) => countPrev - 1);
        dispatch(setCountdown(count));
      }
      if (mode === 'countup') {
        setCount((countPrev) => countPrev + 1);
        dispatch(setCountup(count));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, count, dispatch, mode]);

  return formatDuration(count);
}

function formatDuration(duration) {
  return moment.duration(duration, 'seconds').format('mm:ss', { trim: false });
}

export default useCount;
