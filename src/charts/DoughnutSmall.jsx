import React from 'react';
import { Doughnut } from 'react-chartjs-2';
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
  const DoughnutChart = () => {
    const data = {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'white'],
          borderWidth: 6,
        },
      ],
    };
  
    const options = {
      cutoutPercentage: 80,
    };
  
    return (
      <div className="doughnut-chart-container text-center ">
        <div className="text-center doughnutCenter">
          <h6 className='text-center'>80%</h6>
          <p  className='text-center'>Completion</p>
        </div>
        <Doughnut data={data} options={options} width={200} height={200} />
      </div>
    );
  };
  

export default DoughnutChart;











