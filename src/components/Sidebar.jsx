import React from "react";
import { Link } from "react-router-dom";
//import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/youtube">Youtube</Link></li>
        <li><Link to="/desserts">Desserts</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </aside>
  );
}