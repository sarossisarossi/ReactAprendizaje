import React from "react";
import { Link } from "react-router-dom";
//import "./Navbar.css"; // Estilos específicos

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/youtube" className="nav-item">Yotube</Link>
      <Link to="/desserts" className="nav-item">Desserts</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
      <Link to="/cards" className="nav-item">Cards</Link>
      <Link to="/calculator" className="nav-item">Calculator</Link>
      <Link to="/feedback" className="nav-item">Feedback</Link>
      <Link to="/newuser" className="nav-item">New User</Link>
      <Link to="/blog" className="nav-item">Blog</Link>
      <Link to="/hws" className="nav-item">HelloWorld States</Link>
      <Link to="/fetchpage" className="nav-item">FetchPage</Link>
      <Link to="/randomuser" className="nav-item">RandomUser</Link>
      <Link to="/cashaccount" className="nav-item">CashAccount</Link>
      <Link to="/userefpage" className="nav-item">UserRefPage</Link>
      <Link to="/liveorders" className="nav-item">Live Orders</Link>
      <Link to="/selectradio" className="nav-item">Select Radio</Link>
      <Link to="/mouseposition" className="nav-item">MousePosition</Link>

      
    </nav>
  );
}