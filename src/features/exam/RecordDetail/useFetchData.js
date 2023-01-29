import { dataRecord } from '../data';
import moment from 'moment';
import 'moment-duration-format';

const formatDate = (data) => {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${day}/${month + 1}/${year}`;
};

const formatDuration = (duration) => {
  return moment.duration(duration, 'seconds').format('HH:mm:ss', { trim: false });
};

function useFetchData() {
  const headerData = {
    partList: [],
    ...dataRecord,
    date: formatDate(dataRecord.date),
    duration: formatDuration(dataRecord.duration),
  };

  // Call API

  // Format data
  dataRecord.data.forEach((partItem) => {
    headerData.partList.push(partItem.part);
  });

  delete headerData['data'];

  return [headerData];
}

export default useFetchData;
