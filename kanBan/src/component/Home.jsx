import Sidebar from "./SideBar.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Task from "./Task.jsx"
import TaskDetail from "./TaskDetail.jsx"
import { useState } from "react"
import {Routes, Route} from "react-router-dom"
import tasksArr from "../assets/json/ItemsList.json"



export default function Home(){
    const[tasksToDisplay, setTasksToDisplay] = useState(tasksArr);

    const removeTask = (taskId)=>{
        const newTasks = tasksToDisplay.filter((el)=>{
            return el.id !== taskId;
        })
        setTasksToDisplay(newTasks);
    }

    return(
        <div id="home">
        
        
        <Sidebar/>
        <Navbar/>

        <Routes>
            <Route path="/" element={<Task taskArr={tasksToDisplay} callbackRemoveTask={removeTask}/>}/>
            <Route path="/tasks/:taskId" element={<TaskDetail taskArr={tasksToDisplay}/>}/>
        </Routes>
        
        

        

        <Footer/>
        </div>
    )
}