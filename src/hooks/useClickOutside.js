import { useEffect } from 'react';
import * as PropTypes from 'prop-types';

const useClickOutside = (ref, triggerRef, callback) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        if (!triggerRef) callback(e);
        if (triggerRef.current && !triggerRef.current.contains(e.target)) {
          callback(e);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, triggerRef, callback]);
};

useClickOutside.propTypes = {
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  triggerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  callback: PropTypes.func,
};

export default useClickOutside;
