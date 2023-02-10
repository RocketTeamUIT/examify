import React from 'react';
import AnswerItem, { Chart } from './components';
import { Breadcrumb } from 'components/ui';
import { Link } from 'react-router-dom';

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
      name: '1',
      score: 125,
    },
    {
      name: '2',
      score: 200,
    },
    {
      name: '3',
      score: 180,
    },
    {
      name: '4',
      score: 290,
    },
    {
      name: '5',
      score: 320,
    },
    {
      name: '6',
      score: 340,
    },
    {
      name: '7',
      score: 310,
    },
    {
      name: '8',
      score: 110,
    },
    {
      name: '9',
      score: 210,
    },
    {
      name: '10',
      score: 400,
    },
    {
      name: '11',
      score: 330,
    },
    {
      name: '12',
      score: 450,
    },
    {
      name: '13',
      score: 500,
    },
    {
      name: '14',
      score: 510,
    },
    {
      name: '15',
      score: 550,
    },
  ];

  const breadcrumbList = [<Link to="/exams">Đề thi</Link>, 'Test 1'];
  return (
    <div className="mx-40 mt-8 gap-y-8 mb-52">
      <Breadcrumb hierarchy={breadcrumbList} />
      <p className="font-extrabold text-h3 my-8">KẾT QUẢ LUYỆN ĐỀ</p>
      {answerList.map((data, index) => (
        <AnswerItem day={index} data={data} />
      ))}
      <p className="font-extrabold text-h3 my-8">TIẾN ĐỘ LUYỆN ĐỀ</p>

      <div className="flex justify-between">
        <div>
          <Chart data={chartData} color={'#A422B0'} />
          <div className="ml-[70px]">
            <div className="flex justify-between">
              <div>
                <p className="font-serif mb-2">
                  <span className="font-bold text-h3">285/</span>
                  <span className="text-[17px]">450</span>
                </p>
                <p>Average point</p>
              </div>
              <div>
                <p className="font-serif mb-2">
                  <span className="font-bold text-h3">12.345</span>
                </p>
                <p>Total time</p>
              </div>
              <div>
                <p className="font-serif mb-2">
                  <span className="font-bold text-h3">12</span>
                </p>
                <p>Exam completed</p>
              </div>
            </div>
            <span className="font-semibold text-h5 mt-9 block">63.3%</span>
          </div>
        </div>
        <div>
          <Chart data={chartData} color={'#106FC6'} />
          <div className="ml-[70px]">
            <div className="flex justify-between">
              <div>
                <p className="font-serif mb-2">
                  <span className="font-bold text-h3">285/</span>
                  <span className="text-[17px]">450</span>
                </p>
                <p>Average point</p>
              </div>
              <div>
                <p className="font-serif mb-2">
                  <span className="font-bold text-h3">12.345</span>
                </p>
                <p>Total time</p>
              </div>
              <div>
                <p className="font-serif mb-2">
                  <span className="font-bold text-h3">12</span>
                </p>
                <p>Exam completed</p>
              </div>
            </div>
            <span className="font-semibold text-h5 mt-9 block">63.3%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamAnswer;
