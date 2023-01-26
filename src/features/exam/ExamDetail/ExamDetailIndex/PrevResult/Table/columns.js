import { Link } from 'react-router-dom';
import { Tag } from '../../../../../../components/ui';

export const COLUMNS = [
  {
    Header: 'Ngày làm',
    accessor: 'date_take',
    Cell: (props) => (
      <>
        <span>{props.value}</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {props.row.original.parts.map((partItem, index) => (
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
    accessor: 'correct',
    Cell: (props) => <span>{`${props.value}/${props.row.original.total}`}</span>,
  },
  {
    Header: 'Thời gian làm bài',
    accessor: 'time_finish',
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
