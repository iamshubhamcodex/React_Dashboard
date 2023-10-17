import React from "react";
import { Line } from "react-chartjs-2";
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
const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {

        label: {
          display: false,
        },
        data: [65, 59, 80, 81, 56],
        borderColor: "blue",
        fill: false,
      },

      {
        label: "yearly Sales",
        data: [55, 85, 40, 71, 66],
        borderColor: "red",
        fill: false,
      },
    ],
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="row d-flex align-items-center justify-content-center mt-5">
        <Line data={data} />
      </div>
    </div>
  );
};

export default LineChart;
