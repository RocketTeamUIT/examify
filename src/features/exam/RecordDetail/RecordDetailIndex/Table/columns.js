import { QuestionCircle } from '../../../components/QuestionCircle';

export const COLUMNS = [
  { Header: 'Phân loại câu hỏi', accessor: 'name' },
  { Header: 'Đúng', accessor: 'correct' },
  { Header: 'Sai', accessor: 'wrong' },
  { Header: 'Bỏ qua', accessor: 'skip' },
  {
    Header: 'Danh sách câu hỏi',
    accessor: 'questionIdList',
    Cell: (props) => (
      <div className="flex flex-wrap gap-2">
        {props.value.map(({ id, order, userAnswer }, index) => (
          <QuestionCircle id={id} key={index} type={userAnswer === 1 ? 'correct' : 'wrong'}>
            {order}
          </QuestionCircle>
        ))}
      </div>
    ),
  },
];
