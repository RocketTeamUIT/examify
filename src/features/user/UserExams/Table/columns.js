import { Tag } from 'components/ui';

export const COLUMNS = [
  {
    Header: 'Mã',
    accessor: 'name',
    Cell: (props) => <span>{props.value}</span>,
  },
  {
    Header: 'Nội dung',
    accessor: 'parts',
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
    accessor: 'date_take',
    Cell: (props) => <span>{props.value}</span>,
  },
  {
    Header: 'Kết quả',
    accessor: 'correct',
    Cell: (props) => <span>{`${props.value}/${props.row.original.total}`}</span>,
  },
  {
    Header: 'Thời gian làm bài',
    accessor: 'time_finish',
    Cell: (props) => <span>{props.value}</span>,
  },
  {
    Header: '',
    accessor: 'id',
  },
];
