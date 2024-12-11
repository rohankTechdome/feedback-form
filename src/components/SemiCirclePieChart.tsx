import React from "react";
import { PieChart, Pie, Cell } from "recharts";

// Define the type for the props
interface SemiCirclePieChartProps {
  data: { name: string; value: number }[]; // Array of objects with name and value properties
}

// Define colors for the chart
const COLORS = ["#6c63ff", "#e0e0ff"]; // Violet and light violet

// SemiCirclePieChart component that receives 'data' as props
const SemiCirclePieChart: React.FC<SemiCirclePieChartProps> = ({ data }) => (
  <div className="relative w-[201px] h-[104px]">
    {/* Semi-Circle Chart */}
    <PieChart width={201} height={104}>
      <Pie
        data={data}
        cx={100.5} // Half of the width (center of the semi-circle)
        cy={104} // Full height of the chart
        startAngle={180}
        endAngle={0}
        innerRadius={40}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>

    {/* Center Text */}

  </div>
);

export default SemiCirclePieChart;
