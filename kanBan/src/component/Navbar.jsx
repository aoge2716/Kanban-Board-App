import "./Navbar.css"
export default function Navbar(props) {
    return (
    
      <div id="topnav">
        <button onClick={props.toggleSidebar}>
          <img src="./src/assets/image/logo/brgr_menu.png" alt="logo of the website" />
        </button>
        
        <h1>Kanbanana</h1>
        <img id="logo" src="./src/assets/image/logo/app_logo.png" alt="logo of the website"/>
      </div>
    );
  }