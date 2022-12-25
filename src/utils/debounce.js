const debounce = (fn, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay, ...args);
  };
};

export default debounce;
