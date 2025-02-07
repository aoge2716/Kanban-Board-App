import { Link, useParams } from "react-router-dom";
import "./Task.css";

export default function TaskDetail(props) {
  const { taskId } = useParams();

  const task = props.taskArr.find((element) => {
    return element.id === taskId;
  });

  return (
    <div key={task.id}>
      <h1>Task Detail Page</h1>
      <ul>
        <li>Title: {task.title}</li>
        <li>Description: {task.description}</li>
        <li>Assignee: {task.assignee}</li>
        <li>Priority: {task.priority ? "High" : "Low"}</li>
        <li>Created Date: {task.createdDate}</li>
        <li>Status: {task.status}</li>
        <img
          src={
            task.status === "Done"
              ? "./src/assets/image/status/heavy_check_mark.png"
              : "./src/assets/image/status/x.png"
          }
          alt=""
        />
        <Link to="/">
          <button>Back</button>
        </Link>
      </ul>
    </div>
  );
}
