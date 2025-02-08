import Sidebar from "./component/SideBar.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Task from "./component/Task.jsx";
import TaskDetail from "./component/TaskDetail.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import tasksArr from "./assets/json/ItemsList.json"


function App() {
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
        <Route path="/" element={<
          Task taskArr={tasksToDisplay} 
          callbackRemoveTask={removeTask} 
          setNewTask={setTasksToDisplay} 
          />}
        />
        <Route path="/tasks/:taskId" element={<TaskDetail taskArr={tasksToDisplay} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
  
}

export default App;
