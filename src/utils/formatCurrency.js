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

export const convertTimeHours = (time) => {
  if (!time) return 0;
  let hours = Math.floor(Number(time) / 3600);

  return hours;
};

export const convertTimeMinutes = (time) => {
  if (!time) return 0;
  let hours = Math.floor(Number(time) / 3600);
  let minutes = Math.round((Number(time) - hours * 3600) / 60);

  return minutes;
};

export const convertHexToRGBA = (hexCode) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
};
