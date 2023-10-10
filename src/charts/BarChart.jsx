import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
  } from "chart.js";
  
  ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
  );
  Chart.register(CategoryScale);
const BarChart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Colors',
        data: [12, 14, 6, 5, 2, 12, 19],
        backgroundColor: ['blue'],
      },
      {
        label: 'Colors',
        data: [12, 16, 3, 7, 8, 7, 18],
        backgroundColor: ['red'],
      },
      {
        label: 'Colors',
        data: [12, 11, 9, 8, 2, 19, 3],
        backgroundColor: ['green'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
