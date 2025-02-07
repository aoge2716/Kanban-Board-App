import Sidebar from "./SideBar.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Task from "./Task.jsx"
import TaskDetail from "./TaskDetail.jsx"
import ErrorPage from "./ErrorPage.jsx"
import AboutPage from "./AboutPage.jsx"
import { useState } from "react"
import {Routes, Route} from "react-router-dom"
import tasksArr from "../assets/json/ItemsList.json"
import AddNewTask from "./AddNewTask.jsx"





export default function Home() {
    const [tasksToDisplay, setTasksToDisplay] = useState(tasksArr);
  
    const removeTask = (taskId) => {
      const newTasks = tasksToDisplay.filter((el) => el.id !== taskId);
      setTasksToDisplay(newTasks);
    };
  
    return (
      <div id="home">
        <Sidebar />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Task taskArr={tasksToDisplay} callbackRemoveTask={removeTask} />
            }
          />
          <Route path="/tasks/:taskId" element={<TaskDetail taskArr={tasksToDisplay} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>

        <AddNewTask setNewTask={setTasksToDisplay} />
        <Footer />
      </div>
    );
  }
  