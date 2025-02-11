import Sidebar from "./component/SideBar.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Home from "./component/Home.jsx";
import EditTask from "./component/EditTask";


import TaskDetail from "./pages/TaskDetail.jsx";

import ErrorPage from "./pages/ErrorPage.jsx";
import AboutPage from "./pages/About.jsx";
import AddNewTaskPage from "./pages/AddNewTaskPage.jsx";
import ShowTasks from "./component/ShowTask.jsx";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import tasksArr from "./assets/json/ItemsList.json"
import "./App.css"



function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState(tasksArr);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const removeTask = (taskId) => {
    const newTasks = tasksToDisplay.filter((el) => el.id !== taskId);
    setTasksToDisplay(newTasks);
  };

  // Function to update a task
  const updateTask = (taskId, updatedTask) => {
    const newTasks = tasksToDisplay.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasksToDisplay(newTasks);
  };

  return (
    <div id="app-container" className={`${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div id="main-section">
        <Navbar toggleSidebar={toggleSidebar} />
        <div id="main-content" className="center-content">
          <Routes>
            <Route
              path="/"
              element={<Home taskArr={tasksToDisplay} callbackRemoveTask={removeTask} setNewTask={setTasksToDisplay} />}
            />
            <Route
              path="/tasks/:taskId"
              element={<TaskDetail taskArr={tasksToDisplay} />}
            />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/AddNewTask" element={<AddNewTaskPage setNewTask={setTasksToDisplay} />} />
            <Route
              path="/CurrentTasks"
              element={<ShowTasks taskArr={tasksToDisplay} callbackRemoveTask={removeTask} />}
            />
            <Route
              path="/edit/:taskId"
              element={<EditTask taskArr={tasksToDisplay} updateTask={updateTask} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;

