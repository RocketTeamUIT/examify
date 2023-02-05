import moment from 'moment';
import 'moment-duration-format';

const typeMapping = {
  1: 'HH:mm:ss',
  2: 'mm:ss',
  3: 'mm',
};

const formatDuration = (duration, type = 1) => {
  return moment.duration(duration, 'seconds').format(typeMapping[type], { trim: false });
};

export default formatDuration;
