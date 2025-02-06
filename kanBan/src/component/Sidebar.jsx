import { Link, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


export default function Sidebar() {
  return (
    <div id="sidebar">
      <nav>
        <NavLink to="/AboutPage" activeClassName="active">
          About
        </NavLink>
      </nav>
        
    </div>
  );
}