import { Link } from 'react-router-dom';
import { Tag } from '../../../../../../components/ui';
import { formatDuration } from 'utils';

const formatDate = (data) => {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${day}/${month + 1}/${year}`;
};

export const COLUMNS = [
  {
    Header: 'Ngày làm',
    accessor: 'createdAt',
    Cell: (props) => (
      <>
        <span>{formatDate(props.value)}</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {props.row.original.partTakeList &&
            props.row.original.partTakeList.map((partItem, index) => (
              <Tag color="#ff9513" key={index}>
                {partItem}
              </Tag>
            ))}
        </div>
      </>
    ),
  },
  {
    Header: 'Kết quả',
    accessor: 'numsOfCorrectQn',
    Cell: (props) => <span>{`${props.value}/${props.row.original.totalQuestion}`}</span>,
  },
  {
    Header: 'Thời gian làm bài',
    accessor: 'timeFinished',
    Cell: (props) => <span>{formatDuration(props.value)}</span>,
  },
  {
    Header: '',
    accessor: 'id',
    Cell: (props) => (
      <Link to={`/exams/record-detail/${props.row.original.id}`} className="text-primary">
        Xem chi tiết
      </Link>
    ),
  },
];
