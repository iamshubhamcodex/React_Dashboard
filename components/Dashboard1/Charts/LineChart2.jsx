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
const LineChart2 = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label: "data",
        data: [10, 20, 30, 40, 60, 80, 110, 150, 200, 250, 260, 250],
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12">
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default LineChart2;
