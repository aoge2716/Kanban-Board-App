import Sidebar from "./SideBar.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

export default function Home(){
    return(
        <div id="home">
        
        <Sidebar/>
        <Navbar/>
        <h1>HOME PAGE</h1>
        <Footer/>
        </div>
    )
}