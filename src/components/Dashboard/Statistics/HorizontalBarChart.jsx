import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HorizontalBarChart = ({ scholarshipsCategory }) => {
  const data = [
    {
      name: "Full-fund",
      count: scholarshipsCategory.fullFund,
    },
    {
      name: "Partial",
      count: scholarshipsCategory.partial,
    },
    {
      name: "Self-fund",
      count: scholarshipsCategory.selfFund,
    },
  ];
  return (
    <div className="w-full h-96 pb-10 border-b-2 border-gray-200">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 0,
            bottom: 0,
            left: 45,
          }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed />
          <Tooltip />
          <Bar dataKey="count" barSize={25} fill="#2d5c9e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalBarChart;
