import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

// Define the type for the props
interface AccuracyChartProps {
  data: { question: number; accuracy: number }[]; // Array of objects with question and accuracy properties
}

// AccuracyChart component that receives 'data' as props
const AccuracyChart: React.FC<AccuracyChartProps> = ({ data }) => (
  <LineChart width={537} height={167.61} data={data}>
    <XAxis
      dataKey="question"
      tick={{ fontSize: 10 }}
    />
    <YAxis
      domain={[1, 5]}
      tick={{ fontSize: 10 }}
      interval={0} // Show all numbers on Y-axis
    />
    <Tooltip />
    <Line type="monotone" dataKey="accuracy" stroke="#8884d8" strokeWidth={2} dot={false} />
  </LineChart>
);

export default AccuracyChart;
