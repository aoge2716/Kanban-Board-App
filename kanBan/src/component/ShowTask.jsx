import { Link } from "react-router-dom";
import "./ShowTask.css"
export default function ShowTasks({taskArr, callbackRemoveTask}){
    return(
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
    )

}