
import { Link, useParams } from "react-router-dom"
import "./Task.css"

export default function TaskDetail(props){
    const {taskId} = useParams();
    
    const task = props.taskArr.find((element)=>{
        return element.id === taskId
    })

    return (
        <div  key={task.id}>
            <h1>Tas Detail Page </h1>
            <ul>
                <li>title:{task.title}</li>
                <li>description: {task.description}</li>
                <li>assignee: {task.assignee}</li>
                <li>priority: {task.priority}</li>
                <li>created date: {task.createdDate}</li>
                <li>status:{task.status}</li>
                <img src={`${task.status==="Done"
                            ? "./src/assets/image/status/heavy_check_mark.png"
                            : "./src/assets/image/status/x.png"}`} alt="" />
                <Link to="/">
                    <button>Back</button>
                </Link>
                
            </ul>
        </div>
    )
}