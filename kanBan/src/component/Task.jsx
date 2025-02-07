import "./Task.css"
import { Link } from "react-router-dom";


export default function Task(props){
    
    return (
        <div className="tasks">
            <h1>Home Page</h1>
            {props.taskArr.map(element => {
                return(
                    
                    <div className="task" key={element.id}>
                            <ul>
                                <li>title:{element.title}</li>
                                <li>assignee: {element.assignee}</li>
                                <li>created date: {element.createdDate}</li>
                                <li>status:{element.status}</li>
                                <Link to={`/tasks/${element.id}`}>
                                    <button> Show Task Detail</button>
                                </Link>
                                <button onClick={()=>props.callbackRemoveTask(element.id)}>delete</button>
                            </ul>
                        
                    </div>
            )
            })}
        </div>
        
            
    )

}
