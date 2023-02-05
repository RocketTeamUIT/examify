import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountdown, setCountup } from '../tackleSlice';
import moment from 'moment';
import 'moment-duration-format';

// Duration = second
function useCount() {
  const duration = useSelector((store) => store.tackle.duration);
  const [count, setCount] = useState(duration);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useCount called');
    const interval = setInterval(() => {
      if (duration > 0 && count > 0) {
        setCount((countPrev) => countPrev - 1);
        dispatch(setCountdown(count));
      }
      if (duration === 0) {
        setCount((countPrev) => countPrev + 1);
        dispatch(setCountup(count));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, count, dispatch]);

  return formatDuration(count);
}

function formatDuration(duration) {
  return moment.duration(duration, 'seconds').format('mm:ss', { trim: false });
}

export default useCount;
