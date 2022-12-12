export const printPrice = (price) => {
  let temp;
  temp = price.toString();
  let dot = '.';
  let k = 0;
  for (let i = temp.length - 1; i >= 0; i--) {
    ++k;
    if (k % 3 === 0 && i !== 0) {
      temp = [temp.slice(0, i), dot, temp.slice(i)].join('');
    }
  }
  return temp;
};
