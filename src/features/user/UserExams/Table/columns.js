import { Tag } from 'components/ui';
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
    Header: 'Mã',
    accessor: 'examName',
    Cell: (props) => <span>{props.value}</span>,
  },
  {
    Header: 'Nội dung',
    accessor: 'partTakeList',
    Cell: (props) => (
      <div className="flex flex-wrap gap-2">
        {props.value
          .filter((item, index) => index < 8)
          .map((partItem, index) =>
            index + 1 === 8 ? (
              <Tag color="#ff9513" key={index}>
                . . .
              </Tag>
            ) : (
              <Tag color="#ff9513" key={index}>
                {partItem}
              </Tag>
            ),
          )}
      </div>
    ),
  },
  {
    Header: 'Ngày làm',
    accessor: 'updatedAt',
    Cell: (props) => <span>{formatDate(props.value)}</span>,
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
  },
];
