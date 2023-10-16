/** @format */

import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { HiChartSquareBar } from "react-icons/hi";
import { FaFileWaveform } from "react-icons/fa6";



const Dashboardtwo = () => {
  return (
    <>
      <div className='dashboardtwo'>
        <h4>DQ WorkFlow</h4>
        <p>Welcome to DQ WorkFlow</p>
        <div className='containers'>
          <div className='gradient-div'>
            <div className='left'>
              <h3>Overall DQ Score</h3>
              <div className='text'>
                <h3>97</h3>
              </div>
            </div>
            <MdOutlineWork className='jobtwo' />
          </div>

          <div className='gradient-div'>
            <div className='left'>
              <h3>Total Rows Process</h3>
              <div className='text'>
                <h3>8956923</h3>
              </div>
            </div>
            <HiChartSquareBar className='charttwo' />
          </div>

          <div className='gradient-div'>
            <div className='left'>
              <h3>Failed rows</h3>
              <div className='text'>
                <h3>12/32</h3>
              </div>
            </div>
            <FaFileWaveform className='formtwo' />
          </div>

          <div className='dashboardtwosixdivs'>
            <div className='six-separate-div'>Completeness</div>
            <div className='six-separate-div'>Timeliness</div>
            <div className='six-separate-div'>Validity</div>
           <div className='six-separate-div'>Accurancy</div>
            <div className='six-separate-div'>Consistency</div>
            <div className='six-separate-div'>Uniqueness</div>
            
          <div className="dashboardtwo-chartthree">
            chart
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardtwo;
