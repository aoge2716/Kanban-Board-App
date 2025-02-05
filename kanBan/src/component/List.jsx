import tasksArr from "../assets/json/ItemsList.json"
import ListItem from "./ListItem";
import { useState } from "react"
import "./List.css"
export default function List(props){

    const[tasksToDisplay, setTasksToDisplay] = useState(tasksArr);

    const clicked = (taskId)=>{
        const newTasks = tasksToDisplay.filter((el)=>{
            return el.id !== taskId;
        })
        setTasksToDisplay(newTasks);
    }
    

    return (
        <div className="tasks">
            {tasksToDisplay.map(element => {
                return(
                    <div className="task" key={element.id}>
                        <ul>
                        <ListItem title={element.title} description={element.description} 
                        assignee={element.assignee} priority={element.priority}
                        createdDate={element.createdDate} status={element.status}/>
                        {/* <li>title:{element.title}</li>
                        <li>description: {element.description}</li>
                        <li>assignee: {element.assignee}</li>
                        <li>priority: {element.priority}</li>
                        <li>created date: {element.createdDate}</li>
                        <li>status:{element.status}</li> */}
                        <img src={`${element.status==="Done"
                            ? "./src/assets/image/status/heavy_check_mark.png"
                            : "./src/assets/image/status/x.png"}`} alt="" />
                        <button onClick={()=>clicked(element.id)}>delete</button>
                        </ul>
                    </div>
            )
            })}
        </div>
        
            
    )


    // return (
    //     <ul>
    //         {tasksToDisplay.map(element => {
                
    //             return(
    //                 <div className="tasks" key={element.id}>
    //                     <li>title:{element.title}</li>
    //                     <li>description: {element.description}</li>
    //                     <li>assignee: {element.assignee}</li>
    //                     <li>priority: {element.priority}</li>
    //                     <li>created date: {element.createdDate}</li>
    //                     <li>status:{element.status}
    //                         <img src={`${element.status==="Done"
    //                         ? "./src/assets/image/status/heavy_check_mark.png"
    //                         : "./src/assets/image/status/x.png"}`} alt="" />
    //                     </li>
    //                     <button onClick={()=>clicked(element.id)}>delete</button>
    //                 </div>
    //         )
    //         })}
    //     </ul>
    // )
}