import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillPieChart } from 'react-icons/ai';
import { TbCloudBolt } from 'react-icons/tb';
import DashBoard from '../pages/Dashboard1';

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdowntwo, setShowDropdowntwo] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleDropdowntwo = () => {
    setShowDropdowntwo(!showDropdowntwo);
  };

  return (
    <div className='arengement'>
    <div className="sidebar">
        <li>
        <Link to="/" onClick={toggleDropdown}>
          <AiFillPieChart className="chart-icon" /> 
          <span className="process-engine-link">Process Engine</span>
        </Link>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/transformation">Transformation</Link></li>
              <li><Link to="/Configuration">Configuration</Link></li>
            </ul>
          )}
        </li>

        <li>
        <Link to="/" onClick={toggleDropdowntwo}>
          <TbCloudBolt className="chart-icon" />
          <span className="process-engine-link">DQ Workflow</span> 
        </Link>
          {showDropdowntwo && (
            <ul className="dropdown-menutwo">
              <li><Link to="/favouriteWorkflow">Favourite Workflow</Link></li>
              <li><Link to="/standardWorkflow">Standard Workflow</Link></li>
              <li><Link to="/customWorkflow">Custom Workflow</Link></li>
            </ul>
          )}
        </li>
    </div>
      <DashBoard/>
      
      </div>
  );
};

export default Sidebar;