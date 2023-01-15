import QuestionCircle from '../../../components/QuestionCircle';

export const COLUMNS = [
  { Header: 'Phân loại câu hỏi', accessor: 'name' },
  { Header: 'Đúng', accessor: 'correct' },
  { Header: 'Sai', accessor: 'wrong' },
  { Header: 'Bỏ qua', accessor: 'skip' },
  {
    Header: 'Danh sách câu hỏi',
    accessor: 'numberQnList',
    Cell: (props) => (
      <div className="flex flex-wrap gap-2">
        {props.value.map((questionItem, index) => (
          <QuestionCircle key={index} type={questionItem.status ? 'success' : 'wrong'}>
            {questionItem.orderQn}
          </QuestionCircle>
        ))}
      </div>
    ),
  },
];
