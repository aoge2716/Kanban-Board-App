import { useNavigate } from "react-router-dom";
import "./ShowTask.css"
import { use } from "react";
export default function ShowTasks({taskArr, callbackRemoveTask}){
    const navigate = useNavigate();
    const taskDetail = (id)=>{
        navigate(`/tasks/${id}`);
    };
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
                    
                    
                    <button onClick={()=>taskDetail(element.id)}>
                        Show Task Detail
                    </button>
                    
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