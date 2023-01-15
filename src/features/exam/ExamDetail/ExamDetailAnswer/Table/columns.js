import { Tag } from '../../../../../components/ui';

export const COLUMNS = [
  {
    Header: 'Phần',
    accessor: 'name',
    Cell: (props) => (
      <>
        <span>
          Đáp án <span className="text-primary">{props.value}</span>
        </span>
        <div className="flex flex-wrap mt-2 gap-2">
          <Tag color="#ff9513">{props.value}</Tag>
        </div>
      </>
    ),
  },
  {
    Header: 'Tỉ lệ giải thích',
    accessor: 'correct',
    Cell: (props) => `${props.value}/${props.row.original.total}`,
  },
  {
    Header: '',
    accessor: 'detail',
    Cell: () => <p className="text-primary">Xem chi tiết</p>,
  },
  {
    Header: '',
    accessor: 'report',
    Cell: () => <p className="text-primary">Báo cáo</p>,
  },
];
