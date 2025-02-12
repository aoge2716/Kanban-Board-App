import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar(props) {
    return (
    
      <div id="topnav">
        <button onClick={props.toggleSidebar}>
          <img src="../../public/image/logo/brgr_menu.png" alt="logo of the website" />
        </button>
        
        <h1>Kanbanana</h1>
        
        <Link to="/">
          <img id="logo" src="../../public/image/logo/app_logo.png" alt="logo of the website"/>
        </Link>
        
      </div>
    );
  }