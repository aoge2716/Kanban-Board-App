import { Link } from "react-router-dom";
import AddNewTask from "./AddNewTask.jsx";
import ShowTasks from "./ShowTask.jsx";


export default function Home({ taskArr, callbackRemoveTask, setNewTask }) {
  return (
    <div className="home">
      <h3></h3>
      <AddNewTask setNewTask={setNewTask} />
      <h3></h3>
      <ShowTasks taskArr={taskArr} callbackRemoveTask={callbackRemoveTask}/>
    </div>
  );
}
