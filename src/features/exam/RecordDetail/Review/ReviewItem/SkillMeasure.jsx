import { Bar } from 'features/exam/components';
import classNames from 'classnames';

function SkillMeasure({ data }) {
  return (
    <table className="w-full border">
      <colgroup>
        <col span={1} className="w-1/2" />
        <col span={1} className="w-1/2" />
      </colgroup>

      <tbody>
        {data.skillMeasureList.map((item, index) => (
          <tr key={index}>
            <th
              className={classNames('border p-4 text-h6 text-start', {
                'border-ac_blue': data.type === 'Listening',
                'border-ac_orange': data.type === 'Reading',
              })}
            >
              {item.title}
            </th>
            <td
              className={classNames('border p-4', {
                'border-ac_blue': data.type === 'Listening',
                'border-ac_orange': data.type === 'Reading',
              })}
            >
              <div className="flex gap-2 items-center">
                <span className="text-h6">0%</span>
                <Bar
                  min={0}
                  max={100}
                  curValue={item.percentVal}
                  seek={false}
                  colorStart={data.type === 'Listening' ? '#2860E1' : '#FF9513'}
                  colorStop={data.type === 'Listening' ? '#2860E133' : '#FF951333'}
                />
                <span className="text-h6">100%</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SkillMeasure;
