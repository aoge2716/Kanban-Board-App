import { Link } from "react-router-dom";
import AddNewTask from "./AddNewTask.jsx";
import "./Task.css";

export default function Task({ taskArr, callbackRemoveTask, setNewTask }) {
  return (
    <div className="tasks">
      <h1>Home Page</h1>

      <AddNewTask setNewTask={setNewTask} />
      {taskArr.map((element) => {
        return (
          <div className="task" key={element.id}>
            <ul>
              <li>Title: {element.title}</li>
              <li>Assignee: {element.assignee}</li>
              <li>Created Date: {element.createdDate}</li>
              <li>Status: {element.status}</li>
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
  );
}
