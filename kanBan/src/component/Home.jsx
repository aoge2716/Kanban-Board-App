import { Link } from "react-router-dom";
import AddNewTask from "./AddNewTask.jsx";
import ShowTasks from "./ShowTask.jsx";


export default function Home({ taskArr, callbackRemoveTask, setNewTask }) {
  return (
    <div className="home">
      <h1>Home Page</h1>
      
      <AddNewTask setNewTask={setNewTask} />

      <ShowTasks taskArr={taskArr} callbackRemoveTask={callbackRemoveTask}/>
    </div>
  );
}
