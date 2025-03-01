import React, { useContext } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router";

const Sidebar = ({ onItemClick }) => {
  return (
    <>
      <div className="sidebar">
        <div className="title">
          <h3>TASK-MASTER</h3>
        </div>
        <div className="menu">
          <div className="option">
            <NavLink to="dashboard" className="nav">
              <img src="./images/home.png" alt="" />
              <p onClick={() => onItemClick("Dashboard")}>Dashboard</p>
            </NavLink>
          </div>
          <div className="option">
            <NavLink to="StudentsList" className="nav">
              <img src="./images/list.png" alt="" />
              <p onClick={() => onItemClick("Students List")}>Students List</p>
            </NavLink>
          </div>
          <div className="option">
            <NavLink to="submittions" className="nav">
              <img src="./images/checklist.png" alt="" />
              <p onClick={() => onItemClick("Submittions")}>Submittions</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
