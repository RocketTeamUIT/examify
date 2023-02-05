import { Tag } from '../../../../components/ui';

const KEY_MAPPING = {
  partList: {
    name: 'Phần thi',
    render: (cellData) => (
      <div className="flex flex-wrap gap-2">
        {cellData.map((partItem, index) => (
          <Tag color="#ff9513" key={index}>
            {partItem}
          </Tag>
        ))}
      </div>
    ),
  },
  result: { name: 'Kết quả', render: (cellData) => `${cellData.correct}/${cellData.total}` },
  duration: { name: 'Thời gian hoàn thành', render: (cellData) => cellData },
  date: { name: 'Ngày thực hiện', render: (cellData) => cellData },
};

function Table({ data }) {
  // Delete some props: status, examSeries, examName, examId
  const { status, examSeriesName, examName, examId, ...newData } = data;

  // Convert object to array
  const dataMapping = Object.keys(newData).map((key) => {
    return {
      name: KEY_MAPPING[key].name,
      data: newData[key],
      render: KEY_MAPPING[key].render,
    };
  });

  return (
    <table className="border-separate border-spacing-0 ">
      <tbody>
        {dataMapping.map((row, index) => (
          <tr key={index}>
            <th className="w-[1%] whitespace-nowrap text-md border-solid border-[1px] border-t_light_gray align-top p-3 font-normal text-left ">
              {row.name}
            </th>
            <td className="text-md border-solid border-[1px] border-t_light_gray align-top p-3">
              {row.render(row.data)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
