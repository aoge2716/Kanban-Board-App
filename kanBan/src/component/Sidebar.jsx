import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About.jsx"
import "./Sidebar.css"

export default function Sidebar(props) {
  return (
    <div id="sidebar" className={`${props.isOpen ? "open": ""}`} >
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>

        <Link to="/About">
          <h2>About</h2>
        </Link>
        <button onClick={props.toggleSidebar}>CLOSE</button>
        
      </nav>
        
    </div>
  );
}