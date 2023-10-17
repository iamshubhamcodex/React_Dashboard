/** @format */

import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { HiChartSquareBar } from "react-icons/hi";
import { FaFileWaveform } from "react-icons/fa6";
import { VscVmRunning } from "react-icons/vsc";
import BarChart from "../components/Dashboard1/Charts/BarChart";
import DoughnutChart from "../components/Dashboard1/Charts/DoughnutChart";
import LineChart from "../components/Dashboard1/Charts/LineChart";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h4>Dashboard</h4>
        <p>Welcome to DataBlendIQ</p>
        <div className="containers">
          <div className="red">
            <div className="left">
              <h4>PDI Jobs</h4>
              <div className="text">
                <h3>0212</h3>
                <p className="smallfont">+8% from yesterday</p>
              </div>
            </div>
            <MdOutlineWork className="job" />
          </div>

          <div className="yellow">
            <div className="left">
              <h4>Transformation</h4>
              <div className="text">
                <h3>06135</h3>
                <p className="smallfont">+5% from yesterday</p>
              </div>
            </div>
            <HiChartSquareBar className="chart" />
          </div>

          <div className="green">
            <div className="left">
              <h4>Schedule Jobs/KTR</h4>
              <div className="text">
                <h3>12/32</h3>
              </div>
            </div>
            <FaFileWaveform className="form" />
          </div>

          <div className="purple">
            <div className="left">
              <h4>Running Status</h4>
              <div className="text">
                <h3>05</h3>
                <div className="parentdiv">
                  <div className="childdiv"></div>
                </div>
              </div>
            </div>
            <VscVmRunning className="status" />
          </div>
          {/* Five separate divs beneath the Dashboard */}
          <div className="divs">
            <div className="separate-div">
              <BarChart />
            </div>
            <div className="separate-div">
              <DoughnutChart />
            </div>
            <div className="separate-div">
              <LineChart />
            </div>

            <div className="separate-div">Div 4</div>
            <div className="separate-div">Div 5</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
