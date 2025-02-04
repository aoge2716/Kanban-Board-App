import Sidebar from "./SideBar.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import tasksArr from "../assets/json/ItemsList.json"
export default function Home(){
    return(
        <div id="home">
            
        
        <Sidebar/>
        <Navbar/>
        <h1>HOME PAGE</h1>

        <ul>
            {tasksArr.map(element => {
                return(
                <li>{element.title}:{element.status}</li>
            )
            })}
        </ul>

        <Footer/>
        </div>
    )
}