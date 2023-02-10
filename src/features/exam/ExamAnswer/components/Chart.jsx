import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Chart({ data, color }) {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 50,
      }}
    >
      <CartesianGrid horizontal={false} vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="score" fill={color} radius={[10, 10, 0, 0]}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={color} />
        ))}
      </Bar>
    </BarChart>
  );
}

export default Chart;
