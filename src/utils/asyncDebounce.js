const asyncDebounce = (fn, delay) => {
  let timerId;
  return async (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay, ...args);
  };
};

export default asyncDebounce;
