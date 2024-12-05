import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface GraphRendererProps {
    student: any;
}

const GraphRenderer: React.FC<GraphRendererProps> = ({ student }) => {
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
  };

  return (
    <div className="h-64 w-25 ">
       <Bar data={student} options={options} />
    </div>
  );
};

export default GraphRenderer;
