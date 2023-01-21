import MOCK_DATA from './MOCK_DATA';
import { Tag } from '../../../../components/ui';

const KEY_MAPPING = {
  partList: 'Phần thi',
  result: 'Kết quả',
  duration: 'Thời gian hoàn thành',
  dateTake: 'Ngày thực hiện',
};

function Table() {
  // Defind specific method render
  const renderList = [
    (cellData) => (
      <div className="flex flex-wrap gap-2">
        {cellData.map((partItem, index) => (
          <Tag color="#ff9513" key={index}>
            {partItem}
          </Tag>
        ))}
      </div>
    ),
    (cellData) => `${cellData.correct}/${cellData.total}`,
    (cellData) => cellData,
    (cellData) => cellData,
  ];

  // Convert object to array
  const dataMapping = Object.keys(MOCK_DATA).map((key) => {
    return {
      name: KEY_MAPPING[key],
      data: MOCK_DATA[key],
    };
  });

  // Add render function to each object
  dataMapping.forEach((item, index) => (item.render = renderList[index]));

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
