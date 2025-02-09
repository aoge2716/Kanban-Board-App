import { Link } from "react-router-dom";
import AddNewTask from "./AddNewTask.jsx";
import "./Task.css";

export default function Task({ taskArr, callbackRemoveTask, setNewTask }) {
  return (
    <div id="home">
      <h1>Home Page</h1>
      
      <AddNewTask setNewTask={setNewTask} />

      <div id="tasks">
        {taskArr.map((element) => {
          return (
            <div className="task" key={element.id}>
              <ul>
                <li><strong>Title: </strong> {element.title}</li>
                <li><strong>Assignee: </strong> {element.assignee}</li>
                <li><strong>Created Date: </strong> {element.createdDate}</li>
                <li><strong>Status: </strong> {element.status}</li>
                <Link to={`/tasks/${element.id}`}>
                  <button>Show Task Detail</button>
                </Link>
                <button onClick={() => callbackRemoveTask(element.id)}>
                  Delete
                </button>
              </ul>
            </div>
          );
        })}
      </div>
      
      
    </div>
  );
}
