/** @format */

import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { HiChartSquareBar } from "react-icons/hi";
import { FaFileWaveform } from "react-icons/fa6";

import DoughnutSmall from "../components/Dashboard1/Charts/DoughnutSmall";

const Dashboardtwo = () => {
  return (
    <div>
      <div className="dashboardtwo">
        <h4>DQ WorkFlow</h4>
        <p>Welcome to DQ WorkFlow</p>
        <div className="containers">
          <div className="gradient-div">
            <div className="left">
              <h3>Overall DQ Score</h3>
              <div className="text">
                <h3>97</h3>
              </div>
            </div>
            <MdOutlineWork className="jobtwo" />
          </div>

          <div className="gradient-div">
            <div className="left">
              <h3>Total Rows Process</h3>
              <div className="text">
                <h3>8956923</h3>
              </div>
            </div>
            <HiChartSquareBar className="charttwo" />
          </div>

          <div className="gradient-div">
            <div className="left">
              <h3>Failed rows</h3>
              <div className="text">
                <h3>12/32</h3>
              </div>
            </div>
            <FaFileWaveform className="formtwo" />
          </div>
        </div>
      </div>
      <div className="dashboardtwosixdivs">
        <div className="six-separate-div">
          <h2>Completeness</h2>
          <DoughnutSmall />
        </div>
        <div className="six-separate-div">
          <h2>Timeliness</h2>
          <DoughnutSmall />
        </div>
        <div className="six-separate-div">
          <h2>Validity</h2>
          <DoughnutSmall />
        </div>
        <div className="six-separate-div">
          <h2>Accurancy</h2>
          <DoughnutSmall />
        </div>
        <div className="six-separate-div">
          <h2>Consistency</h2>
          <DoughnutSmall />
        </div>
        <div className="six-separate-div">
          <h2>Uniqueness</h2>
          <DoughnutSmall />
        </div>

        <div className="dashboardtwo-chartthree">chart</div>
      </div>
    </div>
  );
};

export default Dashboardtwo;
