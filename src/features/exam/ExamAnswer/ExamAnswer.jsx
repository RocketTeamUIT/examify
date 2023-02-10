import React from 'react';
import AnswerItem from './components';
import { Breadcrumb } from 'components/ui';
import { Link } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

function ExamAnswer() {
  const answerList = [
    {
      name: 'TOECT Listening',
      date_take: '24/09/2022',
      time_finish: '90:23:00',
      reading: '115',
      listening: '250',
    },
    {
      name: 'TOECT Listening',
      date_take: '24/09/2022',
      time_finish: '90:23:00',
      reading: '200',
      listening: '230',
    },
    {
      name: 'TOECT Listening',
      date_take: '24/09/2022',
      time_finish: '90:23:00',
      reading: '215',
      listening: '215',
    },
  ];
  const chartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const breadcrumbList = [<Link to="/exams">Đề thi</Link>, 'Test 1'];
  return (
    <div className="mx-40 mt-8 gap-y-8">
      <Breadcrumb hierarchy={breadcrumbList} />
      <p className="font-extrabold text-h3 my-8">KẾT QUẢ LUYỆN ĐỀ</p>
      {answerList.map((data, index) => (
        <AnswerItem day={index} data={data} />
      ))}
      <p className="font-extrabold text-h3 my-8">TIẾN ĐỘ LUYỆN ĐỀ</p>

      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={'#A422B0'} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

export default ExamAnswer;
