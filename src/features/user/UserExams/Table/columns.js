import { Tag } from 'components/ui';
import { formatDuration, formatDate } from 'utils';
import OptionButton from './OptionButton';

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
        {props.value?.map((partItem, index) => (
          <Tag color="#ff9513" key={index}>
            {partItem}
          </Tag>
        ))}
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
    accessor: 'examId',
    Cell: (props) => <OptionButton examId={props.value} />,
  },
];
