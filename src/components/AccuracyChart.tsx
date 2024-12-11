import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

// Define the type for the props
interface AccuracyChartProps {
  data: { question: number; accuracy: number }[]; // Array of objects with question and accuracy properties
}

// AccuracyChart component that receives 'data' as props
const AccuracyChart: React.FC<AccuracyChartProps> = ({ data }) => (
  <LineChart width={480} height={150} data={data}>
    <XAxis
      dataKey="question"
      label={{ value: 'Questions', position: 'insideBottom', offset: -5, style: { fontSize: 12 } }}
      tick={{ fontSize: 10 }}
    />
    <YAxis
      domain={[1, 5]}
      label={{ value: 'Accuracy', angle: -90, position: 'insideLeft', offset: 25, style: { fontSize: 12 } }}
      tick={{ fontSize: 10 }}
      interval={0} // Show all numbers on Y-axis
    />
    <Tooltip />
    <Line type="monotone" dataKey="accuracy" stroke="#8884d8" strokeWidth={2} />
  </LineChart>
);

export default AccuracyChart;
